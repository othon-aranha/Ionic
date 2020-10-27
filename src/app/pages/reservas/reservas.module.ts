import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservasPageRoutingModule } from './reservas-routing.module';

import { ReservasPage } from './form/reservas.page';
import { ReservaService } from '../../service/reserva.service';
import { TabsPage } from './tabs/tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ReservasPageRoutingModule
  ]
  , declarations: [ReservasPage, TabsPage]
  , providers: [ReservaService]
})
export class ReservasPageModule {}
