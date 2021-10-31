import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestauranternPage } from './restaurantern.page';

const routes: Routes = [
  {
    path: '',
    component: RestauranternPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestauranternPageRoutingModule {}
