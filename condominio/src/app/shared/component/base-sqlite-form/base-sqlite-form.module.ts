import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BaseSqliteFormPageRoutingModule } from './base-sqlite-form-routing.module';

import { BaseSqliteFormPage } from './base-sqlite-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BaseSqliteFormPageRoutingModule
  ],
  declarations: []
})
export class BaseSqliteFormPageModule {}
