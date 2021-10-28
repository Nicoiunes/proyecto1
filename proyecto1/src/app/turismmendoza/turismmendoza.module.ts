import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TurismmendozaPageRoutingModule } from './turismmendoza-routing.module';

import { TurismmendozaPage } from './turismmendoza.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TurismmendozaPageRoutingModule
  ],
  declarations: [TurismmendozaPage]
})
export class TurismmendozaPageModule {}
