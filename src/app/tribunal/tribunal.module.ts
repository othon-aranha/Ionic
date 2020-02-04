import { TribunalService } from './../service/tribunal.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TribunalPageRoutingModule } from './tribunal-routing.module';

import { TribunalPage } from './tribunal.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TribunalPageRoutingModule
  ]
  , declarations: [TribunalPage]
  , providers: [TribunalService]
})
export class TribunalPageModule {}
