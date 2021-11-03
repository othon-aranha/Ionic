import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnidadeTabsPage } from './unidade-tabs.page';


const routes: Routes = 
[
  {
    path: '',
    component: UnidadeTabsPage
  },  
  {
    path: 'unidade',
    component: UnidadeTabsPage
  },
  {
    path: 'unidade-form',
    loadChildren: () => import('../form/unidade-form.module').then( m => m.UnidadeFormPageModule)
  },
  {
    path: 'unidade-list',
    loadChildren: () => import('../form-list/unidade-list.module').then( m => m.UnidadeListPageModule)
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
export class UnidadeTabsPageRoutingModule {}
