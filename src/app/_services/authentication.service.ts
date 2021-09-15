import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../_model';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';
// import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  private API_URL = environment.apiUrl;

  constructor(
    // tslint:disable-next-line: variable-name
    private _http: HttpClient, private router: Router) {
      this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
      this.currentUser = this.currentUserSubject.asObservable();
   }

   public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(userData) {
    // const data = {email: userData.username.value , password: userData.password.value , mode: 'web', device_id : null};
    const data = {email: userData.email , password: userData.password, mode: 'web', device_id : null};

    return this._http.post<any>(this.API_URL + '/login', data)
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        // if (user && user.result.token) {
        if (user && user.response !== 401) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user.result));
          // this.router.navigate(['events']);
          this.currentUserSubject.next(user.result);
        }

        return user;
      }));
  }

  // getMenu() {
  //   return this.currentUserSubject.asObservable();
  // }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
}

}
