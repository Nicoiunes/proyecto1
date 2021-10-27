import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TurismrnPage } from './turismrn.page';

const routes: Routes = [
  {
    path: '',
    component: TurismrnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TurismrnPageRoutingModule {}
