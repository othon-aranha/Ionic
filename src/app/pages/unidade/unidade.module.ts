import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnidadeTabsPageRoutingModule } from './tabs/unidade-tabs-routing.module';
import { UnidadeTabsPage } from './tabs/unidade-tabs.page';
import { UnidadeService } from '../../service/unidade.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UnidadeTabsPageRoutingModule
  ]
  , declarations: [UnidadeTabsPage]
  , providers: [UnidadeService]
})
export class UnidadePageModule {}
