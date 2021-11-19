import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { TabsPage } from './tabs/tabs.page';
import { CondominiosPageRoutingModule } from './condominios-routing.module';
import { CondominioService } from '../../service/condominio';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CondominiosPageRoutingModule
  ]
  , declarations: [TabsPage]
  , providers: [CondominioService]
})
export class CondominiosPageModule {}
