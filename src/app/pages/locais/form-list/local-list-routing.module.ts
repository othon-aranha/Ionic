import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocalListPage } from './local-list.page';

const routes: Routes = [
  {
    path: '',
    component: LocalListPage
  }, 
  {
    path: 'edit/:id',
    loadChildren: () => import('../form/local-form.module').then( m => m.LocalFormPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocalListPageRoutingModule {}
