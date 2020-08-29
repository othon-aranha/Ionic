import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MinhaContaPage } from './minha-conta.page';

const routes: Routes = [
  {
    path: '',
    component: MinhaContaPage
  },
  {
    path: 'tabs',
    loadChildren: () => import('../../tabs/tabs-routing.module').then( m => m.TabsPageRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MinhaContaPageRoutingModule {}
