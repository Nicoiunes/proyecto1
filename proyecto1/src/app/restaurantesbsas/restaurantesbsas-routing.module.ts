import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantesbsasPage } from './restaurantesbsas.page';

const routes: Routes = [
  {
    path: '',
    component: RestaurantesbsasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantesbsasPageRoutingModule {}
