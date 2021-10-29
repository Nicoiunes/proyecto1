import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingcordobaPage } from './shoppingcordoba.page';

const routes: Routes = [
  {
    path: '',
    component: ShoppingcordobaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingcordobaPageRoutingModule {}
