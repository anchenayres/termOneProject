import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  public handleError(error: HttpErrorResponse) {
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
