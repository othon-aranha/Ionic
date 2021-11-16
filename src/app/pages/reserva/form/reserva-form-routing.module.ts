import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReservaFormPage } from './reserva-form.page';


const routes: Routes = [
  {
    path: '',
    component: ReservaFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservaFormPageRoutingModule {}
