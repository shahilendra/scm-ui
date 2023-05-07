import {

    HttpEvent,
   
    HttpInterceptor,
   
    HttpHandler,
   
    HttpRequest,
   
    HttpResponse,
   
    HttpErrorResponse
   
   } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
   
   import { Observable, throwError } from 'rxjs';
   
   import { retry, catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
   @Injectable()
   export class HttpErrorInterceptor implements HttpInterceptor {
    constructor(private toastr: ToastrService, public auth: AuthService, private router: Router) {}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
      return next.handle(request)
   
        .pipe(
          retry(1),   
          catchError((error: HttpErrorResponse) => { 
              console.log("Error.......................")
              console.log(error);  
            let errorMessage = '';   
            if (error.error instanceof ErrorEvent) {   
              // client-side error   
              errorMessage = `Error: ${error.error.message}`;   
            } else {   
              // server-side error
              let message = '';
              if(error.error.message) {
                message = error.error.message;
              } else {
                message = error.message;
              }
              errorMessage = `Error Code: ${error.status}\nMessage: ${message}`;   
            }   
            // window.alert(errorMessage); 
            this.toastr.error('Failed', errorMessage);
            if(error.status == 401 || error.status == 403) {
                localStorage.removeItem('currentUser');
                localStorage.removeItem('token');
                this.router.navigate(['/auth/sigin']);
            } 
            return throwError(errorMessage);   
          })   
        )   
    }   
   }