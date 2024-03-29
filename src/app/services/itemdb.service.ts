import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '../models/item';
import { Observable } from 'rxjs';

//this makes it a service
@Injectable({
  providedIn: 'root'
})
export class ItemdbService {

  constructor(private http: HttpClient) { }

  url: string = "http://localhost:3000/inventory"

  items: Item[] = []

  //READ
  getAllItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.url)
   
  }

  // getAfrica(item: Item) {
  //   var obj = this.items.filter
  //   return this.http.get<Item[]>(this.url)
  // }


  //get Africa only
  
    //CREATE
    createNewItem(item: Item): Observable<Item> {
      return this.http.post<Item>(this.url, item)
    }

    //DELETE
    removeItem(id: string): Observable<unknown> {
      return this.http.delete(`${this.url}/${id}`)
      // this.items.splice(index, 1);
    }
  
    //UPDATE
    updateAmount(id: string, newAmount: number): Observable<Item> {
      return this.http.put<Item>(`${this.url}/${id}`, {availability: newAmount})
    }

    // filter  
    // findCountry(category: string): Observable<Item[]> {
    //   return this.http.get<Item[]>(`${this.url}/${category}`)
    // }

  

  

   
}
