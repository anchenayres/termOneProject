import { Component } from '@angular/core';
import { ItemdbService } from '../services/itemdb.service';
import { Africa } from '../models/africa';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
  providers: [ItemdbService]

})
export class LocationComponent {

   constructor (private locationService: ItemdbService){
  }

    africa: Africa[] = [];

  //   listOfAfrica: Africa[] = [];

  // getAfrica() {
  //   this.africa.get().subscribe((categoryValue) =>{
  //     this.listOfAfrica = ca
  //   })
  // }

     ngOnInit() {
      this.locationService.getAllItems().subscribe((categoryValue) => {
      console.log(categoryValue);
      this.africa = categoryValue
    });




    


  }

    // getAfrica() {
    //   this.africaList.africa().subscribe((data) => {
    //     this.getAfrica = data
    //   })
    // }
  
    // ngOnInit() {
    //   this.getAfrica()
    // }
  
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
