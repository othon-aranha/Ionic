import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPageCondominio } from './tabs.page';

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
    path: 'condominio-form',
    loadChildren: () => import('../form/condominio-form.module').then( m => m.CondominioFormPageModule)
  },
  {
    path: 'menu-principal',
    loadChildren: () => import('../../menu-principal/menu-principal.module').then( m => m.MenuPrincipalPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
