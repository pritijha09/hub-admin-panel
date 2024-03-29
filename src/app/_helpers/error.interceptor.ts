import {Injectable} from '@angular/core';
import {HttpInterceptor, HttpEvent, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {AuthenticationService} from '../_services/authentication.service';

@Injectable({providedIn: 'root'})
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private _authenticationService: AuthenticationService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      if (err.status === 401) {
        // auto logout if 401 response returned from api
      //  this._authenticationService.logout();
        // location.reload(true);
      }

      const error = err.error.message || err.statusText;
      return throwError(error);
    }));
  }
}
