import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage
  },
  {
    path: 'tabs',
    component: TabsPage
  },
  {
    path: 'categoria-list',
    loadChildren: () => import('../pages/categoria/categoria-list/categoria-list.module').then( m => m.CategoriaListPageModule)
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
