import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeportesmendozaPage } from './deportesmendoza.page';

const routes: Routes = [
  {
    path: '',
    component: DeportesmendozaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeportesmendozaPageRoutingModule {}
