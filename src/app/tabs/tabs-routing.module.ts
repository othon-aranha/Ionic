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
    loadChildren: () => import('../tab-categoria/tab-categoria.module').then( m => m.TabCategoriaPageModule)
  },
  {
    path: 'meus-pedidos',
    loadChildren: () => import('../meus-pedidos/meus-pedidos.module').then( m => m.MeusPedidosPageModule)
  },
  {
    path: 'minha-conta',
    loadChildren: () => import('../minha-conta/minha-conta.module').then( m => m.MinhaContaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
