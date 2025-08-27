import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardPreviewPage } from './card-preview.page';

const routes: Routes = [
  {
    path: '',
    component: CardPreviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardPreviewPageRoutingModule {}
