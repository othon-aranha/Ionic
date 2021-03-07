import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocalFormPage } from './local-form.page';

const routes: Routes = [
  {
    path: '',
    component: LocalFormPage
  },
  {
    path: 'local-form/:id/edit',
    pathMatch: 'full',
    component: LocalFormPage
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocalPageRoutingModule {}
