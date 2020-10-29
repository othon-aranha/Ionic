import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage
  },
  {
    path: 'unidade',
    component: TabsPage
  },
  {
    path: 'unidade-list',
    loadChildren: () => import('../unidade-list/unidade-list.module').then( m => m.UnidadeListPageModule)
  },
  {
    path: 'unidade-form',
    loadChildren: () => import('../unidade-form/unidade-form.module').then( m => m.UnidadeFormPageModule)
  },
  {
    path: 'menu-principal',
    loadChildren: () => import('../../menu-principal/menu-principal.module').then( m => m.MenuPrincipalPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
