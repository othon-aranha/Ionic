import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnidadeTabsPage } from './tabs/unidade-tabs.page';
import { UnidadeListPage } from './unidade-list/unidade-list.page';
import { UnidadeFormPage } from './unidade-form/unidade-form.page';
import { UnidadeFormPageModule } from './unidade-form/unidade-form.module';

const routes: Routes = [
  {
    path: '',
    component: UnidadeTabsPage
  },
  {
    path: 'unidade',
    component: UnidadeTabsPage,
    children: [
         {path: 'unidade-list', loadChildren: () => import('./unidade-list/unidade-list.module').then( m => m.UnidadeListPageModule)},
         {path: 'unidade-form', loadChildren: () => import('./unidade-form/unidade-form.module').then( m => m.UnidadeFormPageModule)}
      ]
  },
  {
    path: 'unidade-form',
    component: UnidadeFormPage,
    children: [
      {path: '', component: UnidadeFormPage},
      {path: ':id/edit', component: UnidadeFormPage}
    ]
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
