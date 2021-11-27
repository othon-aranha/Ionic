import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CondominioListPageRoutingModule } from './condominio-list-routing.module';

import { CondominioListPage } from './condominio-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CondominioListPageRoutingModule
  ],
  declarations: [CondominioListPage]
})
export class CondominioListPageModule {}
