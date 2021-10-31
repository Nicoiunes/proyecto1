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
  {
    path: 'turismobs',
    loadChildren: () => import('./turismobs/turismobs.module').then( m => m.TurismobsPageModule)
  },
  {
    path: 'turismrn',
    loadChildren: () => import('./turismrn/turismrn.module').then( m => m.TurismrnPageModule)
  },
  {
    path: 'turismmendoza',
    loadChildren: () => import('./turismmendoza/turismmendoza.module').then( m => m.TurismmendozaPageModule)
  },
  {
    path: 'deportebsas',
    loadChildren: () => import('./deportebsas/deportebsas.module').then( m => m.DeportebsasPageModule)
  },
  {
    path: 'deportemendoza',
    loadChildren: () => import('./deportemendoza/deportemendoza.module').then( m => m.DeportemendozaPageModule)
  },
  {
    path: 'restaurantemendoza',
    loadChildren: () => import('./restaurantemendoza/restaurantemendoza.module').then( m => m.RestaurantemendozaPageModule)
  },
  {
    path: 'deportecordoba',
    loadChildren: () => import('./deportecordoba/deportecordoba.module').then( m => m.DeportecordobaPageModule)
  },
  {
    path: 'restaurantecordoba',
    loadChildren: () => import('./restaurantecordoba/restaurantecordoba.module').then( m => m.RestaurantecordobaPageModule)
  },
  {
    path: 'turismcordoba',
    loadChildren: () => import('./turismcordoba/turismcordoba.module').then( m => m.TurismcordobaPageModule)
  },
  {
    path: 'restaurantesbsas',
    loadChildren: () => import('./restaurantesbsas/restaurantesbsas.module').then( m => m.RestaurantesbsasPageModule)
  },
  {
    path: 'shppingbsas',
    loadChildren: () => import('./shppingbsas/shppingbsas.module').then( m => m.ShppingbsasPageModule)
  },  {
    path: 'deportern',
    loadChildren: () => import('./deportern/deportern.module').then( m => m.DeporternPageModule)
  },
  {
    path: 'restaurantern',
    loadChildren: () => import('./restaurantern/restaurantern.module').then( m => m.RestauranternPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
