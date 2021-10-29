import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeportermPage } from './deporterm.page';

const routes: Routes = [
  {
    path: '',
    component: DeportermPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeportermPageRoutingModule {}
