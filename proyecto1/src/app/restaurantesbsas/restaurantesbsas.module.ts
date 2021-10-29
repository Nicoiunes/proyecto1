import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantesbsasPageRoutingModule } from './restaurantesbsas-routing.module';

import { RestaurantesbsasPage } from './restaurantesbsas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantesbsasPageRoutingModule
  ],
  declarations: [RestaurantesbsasPage]
})
export class RestaurantesbsasPageModule {}
