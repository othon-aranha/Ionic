import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnidadeListPage } from './unidade-list.page';
import { UnidadeFormPage } from '../unidade-form/unidade-form.page';

const routes: Routes = [
  {
    path: '',
    component: UnidadeListPage
  },
  {
    path: 'unidade-list',
    component: UnidadeListPage
  },
  {
    path: 'unidade-form/:id/edit',
    loadChildren: () => import('../unidade-form/unidade-form.module').then( m => m.UnidadeFormPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnidadeListPageRoutingModule {}
