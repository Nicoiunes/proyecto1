import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'sobrenosotros',
    loadChildren: () => import('./sobrenosotros/sobrenosotros.module').then( m => m.SobrenosotrosPageModule)
  },
  {
    path: 'cordoba',
    loadChildren: () => import('./cordoba/cordoba.module').then( m => m.CordobaPageModule)
  },
  {
    path: 'cordoba',
    loadChildren: () => import('./cordoba/cordoba.module').then( m => m.CordobaPageModule)
  },
  {
    path: 'bsas',
    loadChildren: () => import('./bsas/bsas.module').then( m => m.BsasPageModule)
  },
  {
    path: 'mendoza',
    loadChildren: () => import('./mendoza/mendoza.module').then( m => m.MendozaPageModule)
  },
  {
    path: 'rionegro',
    loadChildren: () => import('./rionegro/rionegro.module').then( m => m.RionegroPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
