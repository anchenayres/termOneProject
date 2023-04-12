import { Component } from '@angular/core';
// import {FormBuilder, Validators} from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { VerifyService } from '../services/verify.service';

@Component({
  selector: 'app-craft',
  templateUrl: './craft.component.html',
  styleUrls: ['./craft.component.css']
})

export class CraftComponent {

  constructor (private verify: VerifyService) {}

  //is our user verified
  isVerified = false;

  //form controls
  username = new FormControl("");
  password = new FormControl("");

  checkVerification() {
    this.verify.checkVerification(this.username.value!, this.password.value!).subscribe((response) =>{
      if(response.success) {
        //optional: store the JWT in storage
        console.log("login Verified Successfully!")
        this.isVerified = true;
      } else {
        console.log("Error has occured");
        this.isVerified = false;
      }
    })
  }


//   items=[
//     {
//       image: "https://cdn.shopify.com/s/files/1/0280/5548/products/Legado-Kenya-Kiamabara-Peaberry-250g_1024x1024.jpg?v=1664978064",
//       title: "Rosetta Roastery - Kenya Peerless Estate",
//       price: "R205,87",
//       size: "250g Total",
//       availability: "1096g",
//   },
//   {
//     image: "https://cdn.shopify.com/s/files/1/0280/5548/products/Truth-White-Bag-With-Clip-1024x1024_ecef9fd0-e305-4e5e-b64f-e71400c873fc_1024x1024.jpg?v=1665661221",
//     title: "Rosetta Roastery - Kenya Peerless Estate",
//     price: "R205,87",
//     size: "250g Total",
//     availability: "1096g",
// },
//   {
//     image: "https://cdn.shopify.com/s/files/1/0280/5548/products/Legado-Kenya-Kiamabara-Peaberry-250g_1024x1024.jpg?v=1664978064",
//     title: "Rosetta Roastery - Kenya Peerless Estate",
//     price: "R205,87",
//     size: "250g Total",
//     availability: "1096g",
// },
//   {
//     image: "https://cdn.shopify.com/s/files/1/0280/5548/products/Legado-Kenya-Kiamabara-Peaberry-250g_1024x1024.jpg?v=1664978064",
//     title: "Rosetta Roastery - Kenya Peerless Estate",
//     price: "R205,87",
//     size: "250g Total",
//     availability: "1096g",
// },
//    {
//     image: "https://cdn.shopify.com/s/files/1/0280/5548/products/Legado-Kenya-Kiamabara-Peaberry-250g_1024x1024.jpg?v=1664978064",
//     title: "Rosetta Roastery - Kenya Peerless Estate",
//     price: "R205,87",
//     size: "250g Total",
//     availability: "1096g",
// },
//   {
//     image: "https://cdn.shopify.com/s/files/1/0280/5548/products/Legado-Kenya-Kiamabara-Peaberry-250g_1024x1024.jpg?v=1664978064",
//     title: "Rosetta Roastery - Kenya Peerless Estate",
//     price: "R205,87",
//     size: "250g Total",
//     availability: "1096g",
// },
//   {
//     image: "https://cdn.shopify.com/s/files/1/0280/5548/products/Legado-Kenya-Kiamabara-Peaberry-250g_1024x1024.jpg?v=1664978064",
//     title: "Rosetta Roastery - Kenya Peerless Estate",
//     price: "R205,87",
//     size: "250g Total",
//     availability: "1096g",
// },
//   {
//     image: "https://cdn.shopify.com/s/files/1/0280/5548/products/Legado-Kenya-Kiamabara-Peaberry-250g_1024x1024.jpg?v=1664978064",
//     title: "Rosetta Roastery - Kenya Peerless Estate",
//     price: "R205,87",
//     size: "250g Total",
//     availability: "1096g",
//   }
//   ]

}
