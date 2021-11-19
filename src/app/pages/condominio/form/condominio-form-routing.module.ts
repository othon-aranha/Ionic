import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CondominioFormPage } from './condominio-form.page';

const routes: Routes = [
  {
    path: '',
    component: CondominioFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CondominioFormPageRoutingModule {}
