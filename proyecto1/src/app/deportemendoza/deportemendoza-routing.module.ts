import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeportemendozaPage } from './deportemendoza.page';

const routes: Routes = [
  {
    path: '',
    component: DeportemendozaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeportemendozaPageRoutingModule {}
