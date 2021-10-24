import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CordobaPage } from './cordoba.page';

const routes: Routes = [
  {
    path: '',
    component: CordobaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CordobaPageRoutingModule {}
