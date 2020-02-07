import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabCategoriaPageRoutingModule } from './tab-categoria-routing.module';

import { TabCategoriaPage } from './tab-categoria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabCategoriaPageRoutingModule
  ],
  declarations: [TabCategoriaPage]
})
export class TabCategoriaPageModule {}
