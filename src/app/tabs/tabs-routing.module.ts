import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage
  },
  {
    path: 'tab-categoria',
    loadChildren: () => import('../pages/tab-categoria/tab-categoria.module').then( m => m.TabCategoriaPageModule)
  },
  {
    path: 'meus-pedidos',
    loadChildren: () => import('../pages/meus-pedidos/meus-pedidos.module').then( m => m.MeusPedidosPageModule)
  },
  {
    path: 'minha-conta',
    loadChildren: () => import('../pages/minha-conta/minha-conta.module').then( m => m.MinhaContaPageModule)
  },
  {
    path: 'menu-principal',
    loadChildren: () => import('../pages/menu-principal/menu-principal.module').then( m => m.MenuPrincipalPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
