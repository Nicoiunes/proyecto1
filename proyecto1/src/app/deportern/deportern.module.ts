import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeporternPageRoutingModule } from './deportern-routing.module';

import { DeporternPage } from './deportern.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeporternPageRoutingModule
  ],
  declarations: [DeporternPage]
})
export class DeporternPageModule {}
