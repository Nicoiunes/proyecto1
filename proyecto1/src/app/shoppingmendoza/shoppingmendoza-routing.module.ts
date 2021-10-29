import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingmendozaPage } from './shoppingmendoza.page';

const routes: Routes = [
  {
    path: '',
    component: ShoppingmendozaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingmendozaPageRoutingModule {}
