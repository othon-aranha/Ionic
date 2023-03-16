import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservasPageRoutingModule } from './reservas-routing.module';

import { ReservaService } from '../../service/reserva.service';
//import { TabsPageReserva } from './tabs/tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ReservasPageRoutingModule
  ]
  , declarations: []
  , providers: [ReservaService]
})
export class ReservasPageModule {}
