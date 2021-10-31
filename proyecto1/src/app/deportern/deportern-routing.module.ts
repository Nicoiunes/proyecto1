import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeporternPage } from './deportern.page';

const routes: Routes = [
  {
    path: '',
    component: DeporternPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeporternPageRoutingModule {}
