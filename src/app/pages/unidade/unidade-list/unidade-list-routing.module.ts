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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnidadeListPageRoutingModule {}
