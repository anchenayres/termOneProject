import { Component } from '@angular/core';
// import {FormBuilder, Validators} from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { VerifyService } from '../services/verify.service';
import { BlendService } from '../services/blend.service';
import { Blend } from '../models/blend';


@Component({
  selector: 'app-craft',
  templateUrl: './craft.component.html',
  styleUrls: ['./craft.component.css']
})

export class CraftComponent {

  constructor (private verify: VerifyService, private blend: BlendService) {}

  //is our user verified
  isVerified = false;

  //form controls
  username = new FormControl("");
  password = new FormControl("");

  listOfBlends: Blend[] = [];

  isBlending = false //preloader

  checkVerification() {
    // this.verify.checkVerification(this.username.value!, this.password.value!).subscribe((response) =>{
    //   if(response.success) {
    //     //optional: store the JWT in storage
    //     console.log("login Verified Successfully!")
    //     this.isVerified = true;
    //   } else {
    //     console.log("Error has occured");
    //     this.isVerified = false;
    //   }
    // })
  }

  getBlend() {
    this.blend.getAllBlends().subscribe((data) => {
      this.listOfBlends = data
    })
  }

  ngOnInit() {
    this.getBlend()
  }

  blendRecipe(blendId: string) {
    this.isBlending = true
    this.blend.blendRecipe(blendId).subscribe((response) => {
      this.isBlending = false
      if(response.success == "success") {
        this.getBlend();
      }
    })
  }



}
