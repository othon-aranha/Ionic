import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage
  },
  {
    path: 'local-form',
    loadChildren: () => import('../form/local-form.module').then( m => m.LocalFormPageModule)
  },
  {
    path: 'local-form/edit/:id',
    loadChildren: () => import('../form/local-form.module').then( m => m.LocalFormPageModule)
  },
  {
    path: 'local-list',
    loadChildren: () => import('../form-list/local-list.module').then( m => m.LocalListPageModule)
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
