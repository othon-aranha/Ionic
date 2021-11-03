import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabCategoriaPage } from './tab-categoria.page';

const routes: Routes = [
  {
    path: '',
    component: TabCategoriaPage
  },
  {
    path: 'menu-principal',
    loadChildren: () => import('../menu-principal/menu-principal.module').then( m => m.MenuPrincipalPageModule)
  } ,
  {
    path: 'reservas',
    loadChildren: () => import('../menu-principal/menu-principal.module').then( m => m.MenuPrincipalPageModule)
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabCategoriaPageRoutingModule {}
