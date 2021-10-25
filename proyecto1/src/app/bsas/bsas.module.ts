import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BsasPageRoutingModule } from './bsas-routing.module';

import { BsasPage } from './bsas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BsasPageRoutingModule
  ],
  declarations: [BsasPage]
})
export class BsasPageModule {}
