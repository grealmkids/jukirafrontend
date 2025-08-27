import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IonicModule, ModalController } from '@ionic/angular';
import { BirthdayFormComponent } from '../components/birthday-form/birthday-form.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule, RouterLink, DatePipe]
})
export class HomePage implements OnInit {

  birthdays = [
    {
      id: 1,
      name: 'John Doe',
      date: new Date('2025-09-15'),
      photoUrl: 'https://i.pravatar.cc/150?u=john',
      daysUntil: 0
    },
    {
      id: 2,
      name: 'Jane Smith',
      date: new Date('2025-10-01'),
      photoUrl: 'https://i.pravatar.cc/150?u=jane',
      daysUntil: 0
    }
  ];

  constructor(private router: Router, private modalCtrl: ModalController) {}

  ngOnInit() {
    this.birthdays.forEach(b => b.daysUntil = this.calculateDaysUntil(b.date));
  }

  calculateDaysUntil(birthday: Date): number {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const birthDate = new Date(birthday);
    let nextBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());
    if (nextBirthday < today) {
      nextBirthday.setFullYear(today.getFullYear() + 1);
    }
    const timeDiff = nextBirthday.getTime() - today.getTime();
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
  }

  async addBirthday() {
    const modal = await this.modalCtrl.create({
      component: BirthdayFormComponent,
    });

    await modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'submit') {
      const newBirthday = {
        id: this.birthdays.length + 1, // Mock ID
        name: data.name,
        date: new Date(data.date),
        photoUrl: 'https://i.pravatar.cc/150?u=' + (this.birthdays.length + 1),
        daysUntil: 0
      };
      newBirthday.daysUntil = this.calculateDaysUntil(newBirthday.date);
      this.birthdays.push(newBirthday);
    }
  }

  deleteBirthday(birthdayId: number) {
    this.birthdays = this.birthdays.filter(b => b.id !== birthdayId);
  }

}
