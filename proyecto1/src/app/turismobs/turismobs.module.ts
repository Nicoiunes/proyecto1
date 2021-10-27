import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TurismobsPageRoutingModule } from './turismobs-routing.module';

import { TurismobsPage } from './turismobs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TurismobsPageRoutingModule
  ],
  declarations: [TurismobsPage]
})
export class TurismobsPageModule {}
