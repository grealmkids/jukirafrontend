import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-birthday-details',
  templateUrl: './birthday-details.page.html',
  styleUrls: ['./birthday-details.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterLink, DatePipe]
})
export class BirthdayDetailsPage implements OnInit {
  birthday: any;

  // Mock data - in a real app, this would come from a service
  private mockBirthdays = [
    {
      id: 1,
      name: 'John Doe',
      date: new Date('2025-09-15'),
      photoUrl: 'https://i.pravatar.cc/150?u=john',
      category: 'Friend',
      daysUntil: 0
    },
    {
      id: 2,
      name: 'Jane Smith',
      date: new Date('2025-10-01'),
      photoUrl: 'https://i.pravatar.cc/150?u=jane',
      category: 'Family',
      daysUntil: 0
    }
  ];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.birthday = this.mockBirthdays.find(b => b.id === +id);
      if (this.birthday) {
        this.birthday.daysUntil = this.calculateDaysUntil(this.birthday.date);
      }
    }
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
