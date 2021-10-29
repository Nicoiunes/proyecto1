import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeportecordobaPage } from './deportecordoba.page';

const routes: Routes = [
  {
    path: '',
    component: DeportecordobaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeportecordobaPageRoutingModule {}
