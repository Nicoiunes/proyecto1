import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShppingbsasPageRoutingModule } from './shppingbsas-routing.module';

import { ShppingbsasPage } from './shppingbsas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShppingbsasPageRoutingModule
  ],
  declarations: [ShppingbsasPage]
})
export class ShppingbsasPageModule {}
