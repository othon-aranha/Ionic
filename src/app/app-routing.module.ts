import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

const routes: Routes = [
  { path: '', 
    redirectTo: 'login', 
    pathMatch: 'full'  
  },
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
    path: 'minha-conta',
    loadChildren: () => import('./pages/minha-conta/minha-conta.module').then( m => m.MinhaContaPageModule)
  },
  {
    path: 'menu-principal',
    loadChildren: () => import('./pages/menu-principal/menu-principal.module').then( m => m.MenuPrincipalPageModule)
  },
  {
    path: 'reservas',
    loadChildren: () => import('./pages/reserva/reservas.module').then( m => m.ReservasPageModule)
  },
  {
    path: 'unidade',
    loadChildren: () => import('./pages/unidade/unidade.module').then( m => m.UnidadePageModule)
  },
  {
    path: 'locais',
    loadChildren: () => import('./pages/local/locais.module').then( m => m.LocaisPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
