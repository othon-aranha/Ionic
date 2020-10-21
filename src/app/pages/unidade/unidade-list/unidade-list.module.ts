import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnidadeListPageRoutingModule } from './unidade-list-routing.module';

import { UnidadeListPage } from './unidade-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnidadeListPageRoutingModule
  ],
  declarations: [UnidadeListPage]
})
export class UnidadeListPageModule {}
