import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterLink]
})
export class ProfilePage implements OnInit {
  user: any; // Will be populated from backend

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.fetchUserProfile();
  }

  fetchUserProfile() {
    this.http.get('http://localhost:3000/auth/me')
      .subscribe({
        next: (response: any) => {
          this.user = response.user;
          console.log('User profile fetched:', this.user);
        },
        error: (error: any) => {
          console.error('Failed to fetch user profile:', error);
          alert('Failed to load user profile.');
        }
      });
  }

  logout() {
    console.log('Logout clicked from profile');
    // TODO: Clear user session/token
    this.router.navigate(['/login']);
  }
}
