import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnidadeTabsPage } from './tabs/unidade-tabs.page';
import { UnidadeListPage } from './form-list/unidade-list.page';
import { UnidadeFormPage } from './form/unidade-form.page';
import { UnidadeFormPageModule } from './form/unidade-form.module';

const routes: Routes = [
  {
    path: '',
    component: UnidadeTabsPage
  },
  {
    path: 'unidade',
    component: UnidadeTabsPage
  },
  {
    path: 'unidade-form',
    pathMatch: 'full',
    loadChildren: () => import('./form/unidade-form.module').then( m => m.UnidadeFormPageModule)
  },
  {
    path: 'unidade/unidade-form/edit/:id',
    pathMatch: 'full',
    loadChildren: () => import('./form/unidade-form.module').then( m => m.UnidadeFormPageModule)
  }, 
  {
    path: 'unidade/unidade-list',
    loadChildren: () => import('./form-list/unidade-list.module').then( m => m.UnidadeListPageModule)
  },
  {
    path: 'menu-principal',
    loadChildren: () => import('../menu-principal/menu-principal.module').then( m => m.MenuPrincipalPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnidadePageRoutingModule {}
