import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TurismobsPage } from './turismobs.page';

const routes: Routes = [
  {
    path: '',
    component: TurismobsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TurismobsPageRoutingModule {}
