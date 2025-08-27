import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BirthdayDetailsPageRoutingModule } from './birthday-details-routing.module';

import { BirthdayDetailsPage } from './birthday-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BirthdayDetailsPageRoutingModule
  ],
  declarations: []
})
export class BirthdayDetailsPageModule {}
