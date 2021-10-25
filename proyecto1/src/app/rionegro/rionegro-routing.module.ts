import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RionegroPage } from './rionegro.page';

const routes: Routes = [
  {
    path: '',
    component: RionegroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RionegroPageRoutingModule {}
