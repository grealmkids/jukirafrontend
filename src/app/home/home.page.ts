import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IonicModule, ModalController } from '@ionic/angular';
import { BirthdayFormComponent } from '../components/birthday-form/birthday-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule, RouterLink, DatePipe]
})
export class HomePage implements OnInit {

  birthdays: any[] = []; // Initialize as empty array

  constructor(private router: Router, private modalCtrl: ModalController, private http: HttpClient) {}

  ngOnInit() {
    this.fetchBirthdays();
  }

  fetchBirthdays() {
    this.http.get('http://localhost:3000/auth/birthdays')
      .subscribe({
        next: (response: any) => {
          this.birthdays = response.birthdays.map((b: any) => ({
            ...b,
            date: new Date(b.date),
            daysUntil: this.calculateDaysUntil(new Date(b.date))
          }));
          console.log('Birthdays fetched:', this.birthdays);
        },
        error: (error: any) => {
          console.error('Failed to fetch birthdays:', error);
          alert('Failed to load birthdays.');
        }
      });
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
      this.http.post('http://localhost:3000/birthdays', data)
        .subscribe({
          next: (response: any) => {
            const newBirthday = {
              ...response.birthday,
              date: new Date(response.birthday.date),
              daysUntil: this.calculateDaysUntil(new Date(response.birthday.date))
            };
            this.birthdays.push(newBirthday);
            console.log('Birthday added via backend:', newBirthday);
            alert('Birthday added successfully!');
          },
          error: (error: any) => {
            console.error('Failed to add birthday:', error);
            alert('Failed to add birthday: ' + (error.error.message || 'Unknown error'));
          }
        });
    }
  }

  deleteBirthday(birthdayId: number) {
    // For now, just remove from local array. In a real app, this would be a DELETE to backend
    this.birthdays = this.birthdays.filter(b => b.id !== birthdayId);
  }

}
