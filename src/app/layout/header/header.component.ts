import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, NavigationEnd} from '@angular/router';
import { AuthenticationService, HeaderTitleService } from 'src/app/_services';
import Swal from 'sweetalert2';
import {filter} from "rxjs/operators";
import {IBreadCrumb} from "../breadcrumb/breadcrumb.interface";
// import 'ng2-sweetalert2';

// import Swal from 'sweetalert2/dist/sweetalert2.js';

// declare var swal: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentPageTitle = '';
  loggedInUser = '';
  public pageTitle: string;
  public breadcrumbs: IBreadCrumb[];

  constructor(
    private authenticationService: AuthenticationService,
    private headerTitleService: HeaderTitleService,
    private route: ActivatedRoute, private router: Router
    ) {
    this.breadcrumbs = this.buildBreadCrumb(this.route.root);
  }

  ngOnInit() {
    /*-------------------set current page title on header----------------------*/
    this.headerTitleService.title.subscribe(updatedTitle => {
      this.currentPageTitle = updatedTitle;
    });

    let loginUser = '';

    let currentUser = this.authenticationService.currentUserValue;
    if (currentUser && currentUser.token) {
      this.loggedInUser = currentUser.name;
    }

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.breadcrumbs = this.buildBreadCrumb(this.route.root);
      // console.log(this.breadcrumbs);
    });
  }

  buildBreadCrumb(route: ActivatedRoute, url: string = '', breadcrumbs: IBreadCrumb[] = []): IBreadCrumb[] {
    // ... implementation of buildBreadCrumb
    //If no routeConfig is avalailable we are on the root path
    let label = route.routeConfig && route.routeConfig.data ? route.routeConfig.data.breadcrumb : '';
    let path = route.routeConfig && route.routeConfig.data ? route.routeConfig.path : '';
    // console.log(label);

    // If the route is dynamic route such as ':id', remove it
    const lastRoutePart = path.split('/').pop();
    const isDynamicRoute = lastRoutePart.startsWith(':');
    if (isDynamicRoute && !!route.snapshot) {
      const paramName = lastRoutePart.split(':')[1];
      path = path.replace(lastRoutePart, route.snapshot.params[paramName]);
      label = route.snapshot.params[paramName];
    }
    // console.log(path, url);
    //In the routeConfig the complete path is not available,
    //so we rebuild it each time
    const nextUrl = path ? `${url}/${path}` : url;

    const breadcrumb: IBreadCrumb = {
      label: label,
      url: nextUrl,
    };
    // Only adding route with non-empty label
    const newBreadcrumbs = breadcrumb.label ? [ ...breadcrumbs, breadcrumb ] : [ ...breadcrumbs];
    if (route.firstChild) {
      //If we are not on our current path yet,
      //there will be more children to look after, to build our breadcumb
      return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
    }
    // console.log(newBreadcrumbs);
    return newBreadcrumbs;
  }

  onLogout() {
    Swal.fire({
      title: 'Are you sure?',
      text: "",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.value) {
        this.authenticationService.logout();
      }
    });
  }
}
