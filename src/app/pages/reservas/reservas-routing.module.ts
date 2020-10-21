import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservasPage } from './reservas.page';
import { ReservaListPage } from './form-list/reserva-list.page';

const routes: Routes = [
  {
    path: '',
    component: ReservaListPage
  },
  {
    path: 'reservas',
    component: ReservasPage
  },
  {
    path: 'reserva-list',
    loadChildren: () => import('./form-list/reserva-list.module').then( m => m.ReservaListPageModule)
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
export class ReservasPageRoutingModule {}
