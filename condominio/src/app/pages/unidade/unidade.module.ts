import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnidadeTabsPageRoutingModule } from './tabs/unidade-tabs-routing.module';
import { UnidadeService } from '../../service/unidade.service';
import { UnidadeTabsPageModule } from './tabs/unidade-tabs.module';
import { UnidadeFormPageModule } from './unidade-form/unidade-form.module';
import { UnidadeListPageModule } from './unidade-list/unidade-list.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UnidadeTabsPageModule,
    UnidadeFormPageModule,
    UnidadeListPageModule,
    UnidadeTabsPageRoutingModule
  ]
  , declarations: []
  , providers: [UnidadeService]
})
export class UnidadePageModule {}
