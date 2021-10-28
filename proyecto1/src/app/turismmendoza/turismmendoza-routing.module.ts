import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TurismmendozaPage } from './turismmendoza.page';

const routes: Routes = [
  {
    path: '',
    component: TurismmendozaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TurismmendozaPageRoutingModule {}
