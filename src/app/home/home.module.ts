import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { BirthdayFormComponent } from '../components/birthday-form/birthday-form.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    BirthdayFormComponent // Import standalone component directly
  ],
  declarations: [] // HomePage is now standalone
})
export class HomePageModule {}
