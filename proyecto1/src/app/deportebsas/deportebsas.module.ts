import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeportebsasPageRoutingModule } from './deportebsas-routing.module';

import { DeportebsasPage } from './deportebsas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeportebsasPageRoutingModule
  ],
  declarations: [DeportebsasPage]
})
export class DeportebsasPageModule {}
