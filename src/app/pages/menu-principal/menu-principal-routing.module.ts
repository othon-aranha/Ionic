import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPrincipalPage } from './menu-principal.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPrincipalPage
  },
  {
    path: 'menu-principal',
    component: MenuPrincipalPage
  },
  {
    path: 'tabs',
    loadChildren: () => import('../categoria/categoria-routing.module').then( m => m.CategoriaPageRoutingModule)
  },
  {
    path: 'unidade',
    loadChildren: () => import('../unidade/unidade-routing.module').then( m => m.UnidadePageRoutingModule)
  },
  {
    path: 'reservas',
    loadChildren: () => import('../reserva/reservas-routing.module').then( m => m.ReservasPageRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPrincipalPageRoutingModule {}
