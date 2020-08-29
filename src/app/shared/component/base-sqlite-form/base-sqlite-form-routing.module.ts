import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaseSqliteFormPage } from './base-sqlite-form.page';

const routes: Routes = [
  {
    path: '',
    component: BaseSqliteFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaseSqliteFormPageRoutingModule {}
