import { Injectable } from '@angular/core';
import { Item } from '../models/item';

//this makes it a service
@Injectable({
  providedIn: 'root'
})
export class ItemdbService {

  constructor() { }

  items: Item[] = []

  //READ
  getAllItems(): Item[] {
    //CALL HTTP TO BACKEND SERVER
    this.items.push({
      image: "https://cdn.shopify.com/s/files/1/0280/5548/products/Legado-Kenya-Kiamabara-Peaberry-250g_1024x1024.jpg?v=1664978064",
      title: "Testing",
      category: "My item category",
      description: "describe the item",
      availability: 20
    },
    {
      image: "https://cdn.shopify.com/s/files/1/0280/5548/products/Legado-Kenya-Kiamabara-Peaberry-250g_1024x1024.jpg?v=1664978064",
      title: "YES",
      category: "My item category",
      description: "describe the item",
      availability: 65
    },
    {
      image: "https://cdn.shopify.com/s/files/1/0280/5548/products/Legado-Kenya-Kiamabara-Peaberry-250g_1024x1024.jpg?v=1664978064",
      title: "YES",
      category: "My item category",
      description: "describe the item",
      availability: 98
    },
    );
    return this.items
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
