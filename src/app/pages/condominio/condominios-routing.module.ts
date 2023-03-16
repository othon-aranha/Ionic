import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPageCondominio } from './tabs/tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPageCondominio
  },
  {
    path: 'condominios',
    component: TabsPageCondominio
  },
  {
    path: 'menu-principal',
    loadChildren: () => import('../menu-principal/menu-principal.module').then( m => m.MenuPrincipalPageModule)
  },
  {
    path: 'condominio-form',
    loadChildren: () => import('./form/condominio-form.module').then( m => m.CondominioFormPageModule)
  },
  {
    path: 'condominio-list',
    loadChildren: () => import('./form-list/condominio-list.module').then( m => m.CondominioListPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CondominiosPageRoutingModule {}
