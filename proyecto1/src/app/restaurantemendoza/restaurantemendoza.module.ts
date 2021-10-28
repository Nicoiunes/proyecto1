import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantemendozaPageRoutingModule } from './restaurantemendoza-routing.module';

import { RestaurantemendozaPage } from './restaurantemendoza.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantemendozaPageRoutingModule
  ],
  declarations: [RestaurantemendozaPage]
})
export class RestaurantemendozaPageModule {}
