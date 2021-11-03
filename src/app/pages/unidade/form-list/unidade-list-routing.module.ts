import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnidadeListPage } from './unidade-list.page';
import { UnidadeFormPage } from '../form/unidade-form.page';

const routes: Routes = [
  {
    path: '',
    component: UnidadeListPage
  },
  {
    path: 'edit/:id',
    loadChildren: () => import('../form/unidade-form.module').then( m => m.UnidadeFormPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnidadeListPageRoutingModule {}
