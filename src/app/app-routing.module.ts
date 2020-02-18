import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'categoria',
    loadChildren: () => import('./pages/categoria/categoria.module').then( m => m.CategoriaPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'produtos',
    loadChildren: () => import('./pages/produtos/produtos.module').then( m => m.ProdutosPageModule)
  },
  {
    path: 'meus-pedidos',
    loadChildren: () => import('./pages/meus-pedidos/meus-pedidos.module').then( m => m.MeusPedidosPageModule)
  },
  {
    path: 'minha-conta',
    loadChildren: () => import('./pages/minha-conta/minha-conta.module').then( m => m.MinhaContaPageModule)
  },
  {
    path: 'tab-categoria',
    loadChildren: () => import('./pages/tab-categoria/tab-categoria.module').then( m => m.TabCategoriaPageModule)
  },
  {
    path: 'tribunal',
    loadChildren: () => import('./pages/tribunal/tribunal.module').then( m => m.TribunalPageModule)
  },
  {
    path: 'menu-principal',
    loadChildren: () => import('./pages/menu-principal/menu-principal.module').then( m => m.MenuPrincipalPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
