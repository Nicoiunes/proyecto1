import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingbsasPage } from './shoppingbsas.page';

const routes: Routes = [
  {
    path: '',
    component: ShoppingbsasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingbsasPageRoutingModule {}
