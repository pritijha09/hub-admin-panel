import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

export class securityKey{
  accesskey: string;
  secretkey: string;
}
@Injectable({
  providedIn: 'root'
})
export class CoreHttpService {
private apiBaseURL: string;
  constructor(private httpClient: HttpClient) {
    this.apiBaseURL = environment.apiUrl;
   }

    /**
   * HTTP GET Method
   * @param enpoint string
   */

  get(enpoint: string): Observable<any> {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const httpHeaders = new HttpHeaders ({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${currentUser.token}`
      });
      
    return this.httpClient.get(`${this.apiBaseURL}${enpoint}`, {headers: httpHeaders});
   }

     /**
   * HTTP PUT Method
   * @param enpoint string
   * @param data any
   *
   */
  put(enpoint: string, data: any): Observable<any> {
     return this.httpClient.put(`${this.apiBaseURL}${enpoint}`, data);
  }


     /**
   * HTTP POST Method
    * @param enpoint string
  * @param data any
   *
   */
  post(endpoint: string, data: any): Observable<any> {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
  
    if(endpoint !== 'hub/login'){
      const  httpHeaders = new HttpHeaders ({
            'Content-Type': 'application/json',
            Authorization: `Bearer ${currentUser.token}`
          });
         // debugger
          return this.httpClient.post(`${this.apiBaseURL}${endpoint}`, data, {headers: httpHeaders});
    } else {
      const  httpHeaders = new HttpHeaders ({
            'Content-Type': 'application/json',
          //  Authorization: `Bearer ${currentUser.token}`
          });
          return this.httpClient.post(`${this.apiBaseURL}${endpoint}`, data, {headers: httpHeaders});
    }
   
   
 
  }

  /** HTTP method for post with file */
  postWithFile(enpoint: string, data: any): Observable<any> {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    // debugger 
    
     let token =  `Bearer ${currentUser.token}`;
 
    // const headers = new HttpHeaders();
     let headers = new HttpHeaders();
      headers.set("Content-Type", "application/json")
     .set("Authorization", token);
     console.log(headers)
   
    //  console.log(httpHeaders)
    return this.httpClient.post(`${this.apiBaseURL}${enpoint}`, data, {headers:headers});
  }

  postfile(endpoint: string, data, header:HttpHeaders): Observable<any> {
    //  debugger
    return this.httpClient.post(`${this.apiBaseURL}${endpoint}`, data, {headers:header}); 
  }
}
