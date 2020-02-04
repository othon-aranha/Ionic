import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TribunalPage } from './tribunal.page';

const routes: Routes = [
  {
    path: '',
    component: TribunalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TribunalPageRoutingModule {}
