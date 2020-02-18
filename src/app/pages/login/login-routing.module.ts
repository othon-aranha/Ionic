import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './login.page';


const routes: Routes = [
  {
    path: '', component: LoginPage
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
export class LoginPageRoutingModule {}
