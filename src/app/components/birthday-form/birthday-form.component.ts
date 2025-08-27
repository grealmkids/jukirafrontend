import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-birthday-form',
  templateUrl: './birthday-form.component.html',
  styleUrls: ['./birthday-form.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, ReactiveFormsModule]
})
export class BirthdayFormComponent implements OnInit {
  @Input() birthday: any;
  isEdit = false;
  birthdayForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.isEdit = !!this.birthday;
    this.birthdayForm = this.fb.group({
      name: [this.birthday?.name || '', Validators.required],
      date: [this.birthday?.date ? new Date(this.birthday.date).toISOString().substring(0, 10) : '', Validators.required],
      category: [this.birthday?.category || 'Friend', Validators.required],
      photoUrl: [this.birthday?.photoUrl || '']
    });
  }

  onSubmit() {
    if (this.birthdayForm.valid) {
      this.modalCtrl.dismiss(this.birthdayForm.value, 'submit');
    }
  }

  dismissModal() {
    this.modalCtrl.dismiss(null, 'cancel');
  }
}
