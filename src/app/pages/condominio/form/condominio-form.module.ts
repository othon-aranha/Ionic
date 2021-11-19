import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CondominioFormPageRoutingModule } from './condominio-form-routing.module';

import { CondominioFormPage } from './condominio-form.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    CondominioFormPageRoutingModule
  ],
  declarations: [CondominioFormPage]
})
export class CondominioFormPageModule {}
