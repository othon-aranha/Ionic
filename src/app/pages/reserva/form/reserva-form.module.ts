import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservaFormPage } from './reserva-form.page';
import { ReservaFormPageRoutingModule } from './reserva-form-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ReservaFormPageRoutingModule
  ]
  , declarations: [ReservaFormPage]
})
export class ReservaFormPageModule {}
