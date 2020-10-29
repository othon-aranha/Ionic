import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnidadePageRoutingModule } from './unidade-routing.module';

import { TabsPage } from './tabs/tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UnidadePageRoutingModule
  ]
  , declarations: [TabsPage]
  , providers: []
})
export class UnidadePageModule {}
