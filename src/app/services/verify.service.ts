import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VerifyService {

  constructor(private http: HttpClient) { }

  httpUrl: string = "http://localhost:3000/user/login";

  //method to check if user is verified to craft
  checkVerification( username: string, password: string): Observable<any> {
    return this.http.post<any>(this.httpUrl,{ username, password })
  }
}
