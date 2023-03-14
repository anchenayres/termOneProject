import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//components
import { HomeComponent } from './home/home.component';
import { CraftComponent } from './craft/craft.component';
import { InventoryComponent } from './inventory/inventory.component';
import { LocationComponent } from './location/location.component';
import { UpdateComponent } from './update/update.component';


//array with all my routes
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'craft', component: CraftComponent},
  {path: 'location', component: LocationComponent},
  {path: 'inventory', component: InventoryComponent},
  {path: 'update', component: UpdateComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
