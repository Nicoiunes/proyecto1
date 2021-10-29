import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TurismcordobaPage } from './turismcordoba.page';

const routes: Routes = [
  {
    path: '',
    component: TurismcordobaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TurismcordobaPageRoutingModule {}
