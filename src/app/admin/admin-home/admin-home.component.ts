import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {AuthenticationService, HeaderTitleService} from '../../_services/index';
import {LowerCasePipe} from '@angular/common';
import {NgxSpinnerService} from 'ngx-spinner';
import {RequestService} from '../../_services/request.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})

export class AdminHomeComponent implements OnInit {

  responseData: any = '';
  apiURL = '';
  competitionData;
  mockTestData: any = '';
  messageType;
  message;
  competitionTypeTitle;
  competitionId;
  editData;

  constructor(
    private headerTitleService: HeaderTitleService,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private lowerCasePipe: LowerCasePipe,
    private router: Router,
    private spinner: NgxSpinnerService,
    private requestService: RequestService,
  ) {

  }

  ngOnInit() {
    // this.route.data.subscribe(data => {
      // console.log(data.title)
      // this.currentPageTitle = data.title;
    // });
    // this.headerTitleService.setTitle(this.currentPageTitle);

   // this.getMocktestList();
  }

//   getMocktestList() {
//     // let requestJson = {};
//     // requestJson = { status: 'all' };
//     this.apiURL = 'get-scheduled-live-test-list';
//     this.spinner.show();

//     this.requestService.requestGetCreator(this.apiURL)
//       .subscribe(
//         (response: any) => {
//           this.spinner.hide();
//           if (response.response === 200) {
//             this.responseData = response.result;
//             // console.log(this.responseData);
//           } else {
//             this.messageType = response.messageType;
//             this.message = response.message;
//             this.requestService.messageBox(this.messageType, this.message);
//           }
//         },
//         (error: any) => {
//           this.spinner.hide();
//           // console.log(error);
//           this.requestService.messageBox('error', 'Something went wrong');
//         }
//       );
//   }

  onRoute(root: any) {
    localStorage.removeItem('editData');
    localStorage.removeItem('mockTestData');

    let loggedIn: any;
    loggedIn = this.authenticationService.currentUserValue;
    loggedIn = this.lowerCasePipe.transform(loggedIn.role);

    this.router.navigate([loggedIn + '/scheduled-mock-test-list']);
  }
}
