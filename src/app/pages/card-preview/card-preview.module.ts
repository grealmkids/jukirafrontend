import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardPreviewPageRoutingModule } from './card-preview-routing.module';

import { CardPreviewPage } from './card-preview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardPreviewPageRoutingModule
  ],
  declarations: []
})
export class CardPreviewPageModule {}
