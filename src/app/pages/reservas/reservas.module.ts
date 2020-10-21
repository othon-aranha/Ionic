import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservasPageRoutingModule } from './reservas-routing.module';

import { ReservasPage } from './reservas.page';
import { ReservaService } from '../../service/reserva.service';
import { ReservaListPage } from './form-list/reserva-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ReservasPageRoutingModule
  ]
  , declarations: [ReservasPage, ReservaListPage]
  , providers: [ReservaService]
})
export class ReservasPageModule {}
