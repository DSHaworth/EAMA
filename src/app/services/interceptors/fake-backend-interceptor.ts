// https://jasonwatmore.com/post/2019/05/02/angular-7-mock-backend-example-for-backendless-development
// https://jasonwatmore.com/post/2018/10/29/angular-7-user-registration-and-login-example-tutorial
// https://stackblitz.com/edit/angular-7-registration-login-example

// General solution for handling errors?
// https://scotch.io/@vigneshsithirai/angular-6-7-http-client-interceptor-with-error-handling

import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

import { ILogin } from 'src/app/models/ILogin';

let data = {
  users: [
    {
      firstName: "Duane", 
      lastName: "Haworth", 
      userName: "dshaworth", 
      password: "P@55w0rd" 
    }
  ],
  roles: [
    {
      name: "admin"
    },
    {
      name: "staff"
    }
  ],
  schools: [
    {

    }
  ]
};

// array in local storage for registered users
let users = localStorage.getItem('users') || [];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;

        // wrap in delayed observable to simulate server api call
        return of(null)
            .pipe(mergeMap(handleRoute))
            .pipe(materialize()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe(delay(500))
            .pipe(dematerialize());

        function handleRoute() {
            switch (true) {
                case url.endsWith('api/auth/login') && method === 'POST':

                  console.log("handleRoute");
                  console.log(request);

                  let user:ILogin = {
                    username: request.body.username,
                    password: request.body.password
                  }

                  return login(user);
            }
        }

        // route functions
        function login(user:ILogin){

          // var result = data.users.filter( (obj) => {
          //   return obj.userName === user.username && obj.password === user.password;
          // })

          // if(result.length === 1){
          //   return ok(result[0]);
          // }          


          var result = data.users.find( (obj) => {
            return obj.userName === user.username && obj.password === user.password;
          })

          if(result){
            return ok(result);
          }          
          return unauthorized();
        }


        ///////////////////
        // helper functions
        ///////////////////
        function ok(body?) {
            return of(new HttpResponse({ status: 200, body }))
        }

        function unauthorized() {
            return throwError({ status: 401, error: { message: 'unauthorized' } });
        }

        function error(message) {
            return throwError({ error: { message } });
        }

        function isLoggedIn() {
            return headers.get('Authorization') === 'Bearer fake-jwt-token';
        }
    }
}

export const fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};