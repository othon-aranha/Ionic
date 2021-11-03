import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { TabsPage } from './tabs/tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage
  },
  {
    path: 'locais',
    component: TabsPage
  },  
  {
    path: 'local-form',
    pathMatch: 'full',
    loadChildren: () => import('./form/local-form.module').then( m => m.LocalFormPageModule)
  },
  {
    path: 'locais/local-form/edit/:id',
    pathMatch: 'full',
    loadChildren: () => import('./form/local-form.module').then( m => m.LocalFormPageModule)
  }, 
  {
    path: 'menu-principal',
    loadChildren: () => import('../menu-principal/menu-principal.module').then( m => m.MenuPrincipalPageModule)
  },
  {
    path: 'local-list',
    loadChildren: () => import('./form-list/local-list.module').then( m => m.LocalListPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocaisPageRoutingModule {}
