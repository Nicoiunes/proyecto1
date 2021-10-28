import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeportebsasPage } from './deportebsas.page';

const routes: Routes = [
  {
    path: '',
    component: DeportebsasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeportebsasPageRoutingModule {}
