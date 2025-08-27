import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-birthday-details',
  templateUrl: './birthday-details.page.html',
  styleUrls: ['./birthday-details.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterLink, DatePipe]
})
export class BirthdayDetailsPage implements OnInit {
  birthday: any;

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.fetchBirthdayDetails(id);
    }
  }

  fetchBirthdayDetails(id: string) {
    this.http.get(`http://localhost:3000/birthdays/${id}`)
      .subscribe({
        next: (response: any) => {
          this.birthday = response.birthday;
          if (this.birthday) {
            this.birthday.date = new Date(this.birthday.date); // Convert date string to Date object
            this.birthday.daysUntil = this.calculateDaysUntil(this.birthday.date);
          }
          console.log('Birthday details fetched:', this.birthday);
        },
        error: (error: any) => {
          console.error('Failed to fetch birthday details:', error);
          alert('Failed to load birthday details.');
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

  generateCard() {
    this.router.navigate(['/card-preview', this.birthday.id]);
  }
}
