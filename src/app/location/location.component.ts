import { Component } from '@angular/core';
import { Item } from '../models/item';
import { ItemdbService } from '../services/itemdb.service';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
  providers: [ItemdbService]

})
export class LocationComponent {

   constructor (private itemService: ItemdbService){
  }

    items: Item[] = []

//   america=[
//       {id: '', category: "Africa"}, 

// ]
// listOfAfrica: Item[] = [];


// getAfrica() {
//   this.items.getAllAfrica().subscribe((data) => {
//     this.listOfBlends = data
//   })
// }

// ngOnInit() {
//   this.getBlend()
// }

  // ngOnInit() {
  //   this.itemService.findCountry(category: String).subscribe((data) => {
  //     console.log(data);
  //     this.items = data
  //   })


  // }




}
