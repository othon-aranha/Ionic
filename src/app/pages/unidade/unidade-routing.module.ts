import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnidadeTabsPage } from './tabs/unidade-tabs.page';
import { UnidadeListPage } from './unidade-list/unidade-list.page';
import { UnidadeFormPage } from './unidade-form/unidade-form.page';

const routes: Routes = [
  {
    path: '',
    component: UnidadeTabsPage
  },
  {
    path: 'unidade',
    component: UnidadeTabsPage,
    children: [
         {path: 'unidade-list', component: UnidadeListPage},
         {path: 'unidade-form', component: UnidadeFormPage}
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
