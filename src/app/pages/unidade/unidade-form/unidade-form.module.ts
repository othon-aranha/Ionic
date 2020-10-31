import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule, IonToolbar } from '@ionic/angular';

import { UnidadeFormPageRoutingModule } from './unidade-form-routing.module';
import { UnidadeFormPage } from './unidade-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UnidadeFormPageRoutingModule
  ],
  declarations: [UnidadeFormPage]
})
export class UnidadeFormPageModule {}
