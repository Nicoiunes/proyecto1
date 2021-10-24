import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CordobaPageRoutingModule } from './cordoba-routing.module';

import { CordobaPage } from './cordoba.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CordobaPageRoutingModule
  ],
  declarations: [CordobaPage]
})
export class CordobaPageModule {}
