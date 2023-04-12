import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blend } from '../models/blend';

@Injectable({
  providedIn: 'root'
})
export class BlendService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:3000/blends"

  //function to get all of my blends
  getAllBlends() {
    return this.http.get<Blend[]>(this.url);
  }
}
