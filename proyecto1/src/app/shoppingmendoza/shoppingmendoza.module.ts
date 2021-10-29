import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoppingmendozaPageRoutingModule } from './shoppingmendoza-routing.module';

import { ShoppingmendozaPage } from './shoppingmendoza.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoppingmendozaPageRoutingModule
  ],
  declarations: [ShoppingmendozaPage]
})
export class ShoppingmendozaPageModule {}
