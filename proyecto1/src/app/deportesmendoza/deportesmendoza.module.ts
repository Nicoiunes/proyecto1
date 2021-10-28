import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeportesmendozaPageRoutingModule } from './deportesmendoza-routing.module';

import { DeportesmendozaPage } from './deportesmendoza.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeportesmendozaPageRoutingModule
  ],
  declarations: [DeportesmendozaPage]
})
export class DeportesmendozaPageModule {}
