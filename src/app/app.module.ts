
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CraftComponent } from './craft/craft.component';
import { InventoryComponent } from './inventory/inventory.component';
import { LocationComponent } from './location/location.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
import { MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';

import { MatCard } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormControl } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgImageSliderModule } from 'ng-image-slider';
import { ScrollingModule} from '@angular/cdk/scrolling';
import { UpdateComponent } from './update/update.component';
import { ReactiveFormsModule } from '@angular/forms';

import {MatDialogModule} from '@angular/material/dialog';

import { HttpClientModule } from '@angular/common/http';
import { AuthOnlyDirective } from './directives/auth-only.directive';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InventoryComponent,
    LocationComponent,
    CraftComponent,
    UpdateComponent,
    AuthOnlyDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    // ScrollingModule,
    MatButtonModule,
    // MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    // MatDialogModule,
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
  bootstrap: [AppComponent]
})
export class AppModule { }
