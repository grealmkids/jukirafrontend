import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BirthdayDetailsPage } from './birthday-details.page';

const routes: Routes = [
  {
    path: '',
    component: BirthdayDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BirthdayDetailsPageRoutingModule {}
