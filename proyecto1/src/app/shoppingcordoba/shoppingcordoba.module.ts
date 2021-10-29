import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoppingcordobaPageRoutingModule } from './shoppingcordoba-routing.module';

import { ShoppingcordobaPage } from './shoppingcordoba.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoppingcordobaPageRoutingModule
  ],
  declarations: [ShoppingcordobaPage]
})
export class ShoppingcordobaPageModule {}
