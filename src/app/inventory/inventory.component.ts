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

  detectAmountChange(e: any) {
    this.newAmountPlaceholder = +e.target.value
  }

  updateAmount(index: number) {
    console.log(this.newAmountPlaceholder);

    this.items[index].availability = this.newAmountPlaceholder

    console.log(this.items[index])

  }

  //DELETE
  removeItem(index: number) {
    this.items.splice(index, 1)
  }


}