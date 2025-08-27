import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterLink]
})
export class ProfilePage implements OnInit {
  user = {
    name: 'Test User',
    email: 'test@example.com',
    credits: 15
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout() {
    console.log('Logout clicked from profile');
    this.router.navigate(['/login']);
  }
}
