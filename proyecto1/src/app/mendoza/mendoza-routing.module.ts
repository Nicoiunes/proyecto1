import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MendozaPage } from './mendoza.page';

const routes: Routes = [
  {
    path: '',
    component: MendozaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MendozaPageRoutingModule {}
