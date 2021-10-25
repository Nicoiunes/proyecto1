import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RionegroPageRoutingModule } from './rionegro-routing.module';

import { RionegroPage } from './rionegro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RionegroPageRoutingModule
  ],
  declarations: [RionegroPage]
})
export class RionegroPageModule {}
