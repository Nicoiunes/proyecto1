import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TurismrnPageRoutingModule } from './turismrn-routing.module';

import { TurismrnPage } from './turismrn.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TurismrnPageRoutingModule
  ],
  declarations: [TurismrnPage]
})
export class TurismrnPageModule {}
