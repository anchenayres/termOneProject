import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry } from 'rxjs';
import { ErrorService } from './error.service';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VerifyService {

  constructor(private http: HttpClient, private errorHandler: ErrorService) { }

  httpUrl: string = "http://localhost:3000/user/login";

  //method to check if user is verified to craft
  checkVerification( username: string, password: string): Observable<any> {
    return this.http.post<any>(this.httpUrl,{ username, password })
    .pipe(
      retry(2),
      catchError(this.errorHandler.handleError)
    )
  }

  private handleError(error: HttpErrorResponse) {
    //0 means client side error
    if(error.status === 0) {
      console.log("An error occured: ", error.error);
    } else {
      //backend side error
      console.log(`Backend returned code ${error.status}, body was: `, error.error)
    }

    //return an observable wuth user-facing error message
    return throwError(() => new Error('Something bad happened; please try again later'))
  }

}
