import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantecordobaPage } from './restaurantecordoba.page';

const routes: Routes = [
  {
    path: '',
    component: RestaurantecordobaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantecordobaPageRoutingModule {}
