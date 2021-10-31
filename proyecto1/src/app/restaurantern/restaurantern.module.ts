import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestauranternPageRoutingModule } from './restaurantern-routing.module';

import { RestauranternPage } from './restaurantern.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestauranternPageRoutingModule
  ],
  declarations: [RestauranternPage]
})
export class RestauranternPageModule {}
