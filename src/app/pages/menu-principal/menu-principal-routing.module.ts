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
    path: 'meus-pedidos',
    loadChildren: () => import('../meus-pedidos/meus-pedidos-routing.module').then( m => m.MeusPedidosPageRoutingModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('../categoria/categoria-routing.module').then( m => m.CategoriaPageRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPrincipalPageRoutingModule {}
