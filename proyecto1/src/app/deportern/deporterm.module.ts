import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeportermPageRoutingModule } from './deporterm-routing.module';

import { DeportermPage } from './deporterm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeportermPageRoutingModule
  ],
  declarations: [DeportermPage]
})
export class DeportermPageModule {}
