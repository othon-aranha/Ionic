import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TribunalPage } from './tribunal.page';

const routes: Routes = [
  {
    path: '',
    component: TribunalPage
  },
  {
    path: 'menu-principal',
    loadChildren: () => import('../menu-principal/menu-principal.module').then( m => m.MenuPrincipalPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TribunalPageRoutingModule {}
