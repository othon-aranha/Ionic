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
    path: 'menu-principal',
    loadChildren: () => import('./pages/menu-principal/menu-principal.module').then( m => m.MenuPrincipalPageModule)
  },
  {
    path: 'reservas',
    loadChildren: () => import('./pages/reservas/reservas.module').then( m => m.ReservasPageModule)
  },
  {
    path: 'unidade',
    loadChildren: () => import('./pages/unidade/unidade.module').then( m => m.UnidadePageModule)
  },  {
    path: 'locais',
    loadChildren: () => import('./pages/locais/locais.module').then( m => m.LocaisPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
