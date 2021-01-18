import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriaPage } from './categoria.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriaPage
  },
  {
    path: 'tabs',
    loadChildren: () => import('../../tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'categoria-list',
    loadChildren: () => import('./categoria-list/categoria-list.module').then( m => m.CategoriaListPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriaPageRoutingModule {}
