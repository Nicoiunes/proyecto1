import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantemendozaPage } from './restaurantemendoza.page';

const routes: Routes = [
  {
    path: '',
    component: RestaurantemendozaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantemendozaPageRoutingModule {}
