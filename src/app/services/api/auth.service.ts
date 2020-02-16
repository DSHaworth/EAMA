import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl: string = "api/auth/";
  jsonHeader: HttpHeaders;

  constructor(
    private http: HttpClient,
  ) {
    this.jsonHeader = new HttpHeaders().append('Content-Type' , 'application/json');
  }

  public login():  Observable<any>{
    const headers = this.jsonHeader;

    return this
            .http
            .post<any>( this.apiUrl + `login`, {headers} );
  }
}
