import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingrnPage } from './shoppingrn.page';

const routes: Routes = [
  {
    path: '',
    component: ShoppingrnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingrnPageRoutingModule {}
