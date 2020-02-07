import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabCategoriaPage } from './tab-categoria.page';

const routes: Routes = [
  {
    path: '',
    component: TabCategoriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabCategoriaPageRoutingModule {}
