import { FormControl, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';
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
    roast: new FormControl(''),
    description: new FormControl(''),
    availability: new FormControl(20)
  })


  ngOnInit() {
    this.itemService.getAllItems().subscribe((data) => {
      console.log(data);
      this.items = data
    })

    //this.items = this.itemService.getAllItems()
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

  this.itemService.createNewItem(addItem).subscribe((item) => {
    this.items.push(item)
  });
}

  //UPDATE

  newAmountPlaceholder: number = 0

  //front end - detect input change
  detectAmountChange(e: any) {
    this.newAmountPlaceholder = +e.target.value
  }

  //beackend to call our service
  updateAmount(id: string) {
    this.itemService.updateAmount(id, this.newAmountPlaceholder).subscribe((item) => {
      console.log(item.availability)
    })
  }

  //DELETE
  removeItem(id: string, index: number) {
    this.itemService.removeItem(id).subscribe();
    this.items.splice(index, 1);
  }
}