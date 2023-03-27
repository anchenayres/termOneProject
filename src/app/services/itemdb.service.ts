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

  //CREATE
  createNewItem(item: Item) {
    this.items.push(item);
  }

    //DELETE
    removeItem(index: number) {
      this.items.splice(index, 1);
    }
  
    //UPDATE
    updateAmount(index: number, newAmount: number) {
      // console.log(newAmount);  
      this.items[index].availability = newAmount
      console.log(this.items[index])
    }
  

   
}
