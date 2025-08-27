import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeliveryLogsPageRoutingModule } from './delivery-logs-routing.module';

import { DeliveryLogsPage } from './delivery-logs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeliveryLogsPageRoutingModule
  ],
  declarations: []
})
export class DeliveryLogsPageModule {}
