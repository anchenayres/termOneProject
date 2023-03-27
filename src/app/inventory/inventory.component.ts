import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Item } from '../models/item';
import { ItemdbService } from '../services/itemdb.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
  providers: [ItemdbService]
})

export class InventoryComponent {

  constructor (private itemService: ItemdbService){

  }


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
   this.items = this.itemService.getAllItems()
  }

//CREATE

createItem(){
  console.log(this.newItem.value)

  var addItem: Item = {
    image: this.newItem.value.image!,
    title: this.newItem.value.title!,
    category: this.newItem.value.category!,
    description: this.newItem.value.description!,
    availability: this.newItem.value.availability!,
  }

  this.itemService.createNewItem(addItem);
}

  //UPDATE

  newAmountPlaceholder: number = 0

  //front end - detect input change
  detectAmountChange(e: any) {
    this.newAmountPlaceholder = +e.target.value
  }

  //beackend to call our service
  updateAmount(index: number) {
    this.itemService.updateAmount(index, this.newAmountPlaceholder)
  }

  //DELETE
  removeItem(index: number) {
    this.itemService.removeItem(index);
  }
}