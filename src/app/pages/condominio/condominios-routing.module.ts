import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs/tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage
  },
  {
    path: 'condominios',
    component: TabsPage
  },
  {
    path: 'menu-principal',
    loadChildren: () => import('../menu-principal/menu-principal.module').then( m => m.MenuPrincipalPageModule)
  },
  {
    path: 'condominio-form',
    loadChildren: () => import('./form/condominio-form.module').then( m => m.CondominioFormPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CondominiosPageRoutingModule {}
