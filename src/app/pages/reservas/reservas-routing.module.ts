import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs/tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage
  },
  {
    path: 'reservas',
    component: TabsPage
  },
  {
    path: 'reserva-list',
    loadChildren: () => import('./form-list/reserva-list.module').then( m => m.ReservaListPageModule)
  },
  {
    path: 'reserva-form',
    loadChildren: () => import('./form/reserva-form.module').then( m => m.ReservaFormPageModule)
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
