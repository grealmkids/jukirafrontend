import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BirthdayFormComponent } from './birthday-form/birthday-form.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    BirthdayFormComponent // Import standalone component directly
  ],
  exports: [
    BirthdayFormComponent // Export standalone component directly
  ]
})
export class ComponentsModule { }
