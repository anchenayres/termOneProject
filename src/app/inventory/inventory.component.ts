import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Item } from '../models/item';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})

export class InventoryComponent {
  //properties
  items: Item[] = []
  newItem = new FormGroup({
    image: new FormControl(''),
    title: new FormControl(''),
    category: new FormControl(''),
    description: new FormControl(''),
    availability: new FormControl(20)
  })

  ngOnInit() {
    this.getAllItems()
  }

    //READ
    getAllItems() {
    this.items.push({
      image: "https://cdn.shopify.com/s/files/1/0280/5548/products/Legado-Kenya-Kiamabara-Peaberry-250g_1024x1024.jpg?v=1664978064",
      title: "Testing",
      category: "My item category",
      description: "describe the item",
      availability: 2
    },
    {
      image: "https://cdn.shopify.com/s/files/1/0280/5548/products/Legado-Kenya-Kiamabara-Peaberry-250g_1024x1024.jpg?v=1664978064",
      title: "YES",
      category: "My item category",
      description: "describe the item",
      availability: 2
    },
    );
  }

//CREATE

createItem(){
  console.log(this.newItem.value)

  var newthing: Item = {
    image: this.newItem.value.image!,
    title: this.newItem.value.title!,
    category: this.newItem.value.category!,
    description: this.newItem.value.description!,
    availability: this.newItem.value.availability!,
  }
  this.items.push(newthing)
}

//UPDATE

//DELETE
}