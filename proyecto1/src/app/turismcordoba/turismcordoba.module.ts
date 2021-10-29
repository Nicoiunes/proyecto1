import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TurismcordobaPageRoutingModule } from './turismcordoba-routing.module';

import { TurismcordobaPage } from './turismcordoba.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TurismcordobaPageRoutingModule
  ],
  declarations: [TurismcordobaPage]
})
export class TurismcordobaPageModule {}
