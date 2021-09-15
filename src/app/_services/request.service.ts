import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

private API_URL = environment.apiUrl;

  // tslint:disable-next-line:variable-name
  constructor(private _http: HttpClient, private route: Router) { }

  // requestGetCreator(route): Observable<any> {
  //   return this._http.get<any>(this.API_URL + '/' + route, {});
  // }

  requestGetCreator(route: string): Observable<any> {
    return this._http.get(this.API_URL + '/' + route, {});
    // console.log(this.API_URL + '/' + route);
  }

  requestPostCreator(route, param): Observable<any> {
    return this._http.post<any>(this.API_URL + '/' + route, param);
  }

  confirmMessageBox(type, message) {
  }

  messageBox(type, message) {
    Swal.fire({
      icon: type,
      title: '',
      text: message,
      timer: 1500
    });
  }
}
