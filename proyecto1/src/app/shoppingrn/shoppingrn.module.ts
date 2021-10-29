import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoppingrnPageRoutingModule } from './shoppingrn-routing.module';

import { ShoppingrnPage } from './shoppingrn.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoppingrnPageRoutingModule
  ],
  declarations: [ShoppingrnPage]
})
export class ShoppingrnPageModule {}
