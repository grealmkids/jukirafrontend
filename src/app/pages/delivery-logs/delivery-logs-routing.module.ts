import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeliveryLogsPage } from './delivery-logs.page';

const routes: Routes = [
  {
    path: '',
    component: DeliveryLogsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeliveryLogsPageRoutingModule {}
