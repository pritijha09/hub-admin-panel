import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  /*canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  */
 constructor(private router: Router, private _authenticationService: AuthenticationService){}

 canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
   const currentUser = this._authenticationService.currentUserValue;

   if (currentUser) {
     if (route.data.roles && route.data.roles.indexOf(currentUser.role) === -1) {
       this.router.navigate(['/login']);
       return false;
     }

    //  otherwise  authorised so return true
     return true;
   }
   // not logged in so redirect to login page with the return url
   this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
   return false;
 }
}
