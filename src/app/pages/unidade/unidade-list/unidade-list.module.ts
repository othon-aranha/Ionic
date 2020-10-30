import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnidadeListPageRoutingModule } from './unidade-list-routing.module';

import { UnidadeListPage } from './unidade-list.page';
import { UnidadeFormPage } from '../unidade-form/unidade-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UnidadeListPageRoutingModule
  ],
  declarations: [UnidadeListPage]
})
export class UnidadeListPageModule {}
