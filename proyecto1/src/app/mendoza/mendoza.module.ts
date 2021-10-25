import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MendozaPageRoutingModule } from './mendoza-routing.module';

import { MendozaPage } from './mendoza.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MendozaPageRoutingModule
  ],
  declarations: [MendozaPage]
})
export class MendozaPageModule {}
