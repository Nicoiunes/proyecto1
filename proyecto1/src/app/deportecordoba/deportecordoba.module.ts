import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeportecordobaPageRoutingModule } from './deportecordoba-routing.module';

import { DeportecordobaPage } from './deportecordoba.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeportecordobaPageRoutingModule
  ],
  declarations: [DeportecordobaPage]
})
export class DeportecordobaPageModule {}
