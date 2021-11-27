import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CondominioListPage } from './condominio-list.page';

const routes: Routes = [
  {
    path: '',
    component: CondominioListPage
  }, 
  {
    path: 'edit/:id',
    loadChildren: () => import('../form/condominio-form.module').then( m => m.CondominioFormPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CondominioListPageRoutingModule {}
