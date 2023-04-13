import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blend } from '../models/blend';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:3000/location"

  //function to get all of my blends
  // getAllAfrica() {
  //   return this.http.get<Item[]>(this.url);
  // }

  // //method to blend recipe
  // blendRecipe(blendId: string) {
  //   return this.http.post<any>(`${this.url}/afica`, {blendId})
  // }
}
