import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnidadeTabsPageRoutingModule } from './unidade-tabs-routing.module';

import { UnidadeTabsPage } from './unidade-tabs.page';
import { UnidadeFormPageModule } from '../unidade-form/unidade-form.module';
import { UnidadeListPageModule } from '../unidade-list/unidade-list.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnidadeTabsPageRoutingModule
  ],
  declarations: [UnidadeTabsPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UnidadeTabsPageModule {}
