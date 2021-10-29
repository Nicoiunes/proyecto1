import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantecordobaPageRoutingModule } from './restaurantecordoba-routing.module';

import { RestaurantecordobaPage } from './restaurantecordoba.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantecordobaPageRoutingModule
  ],
  declarations: [RestaurantecordobaPage]
})
export class RestaurantecordobaPageModule {}
