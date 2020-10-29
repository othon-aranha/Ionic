import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnidadeFormPage } from './unidade-form.page';

const routes: Routes = [
  {
    path: '',
    component: UnidadeFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnidadeFormPageRoutingModule {}
