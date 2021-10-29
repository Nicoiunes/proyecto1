import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeportemendozaPageRoutingModule } from './deportemendoza-routing.module';

import { DeportemendozaPage } from './deportemendoza.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeportemendozaPageRoutingModule
  ],
  declarations: [DeportemendozaPage]
})
export class DeportemendozaPageModule {}
