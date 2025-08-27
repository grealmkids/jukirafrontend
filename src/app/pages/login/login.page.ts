import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule, RouterLink]
})
export class LoginPage implements OnInit {
  email!: string;
  password!: string;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
  }

  onLogin() {
    console.log('Login button clicked', { email: this.email, password: this.password });
    this.http.post('http://localhost:3000/auth/login', { email: this.email, password: this.password })
      .subscribe({
        next: (response: any) => {
          console.log('Login successful', response);
          alert('Login successful!');
          // TODO: Store user token/session
          this.router.navigate(['/tabs']);
        },
        error: (error: any) => {
          console.error('Login failed', error);
          alert('Login failed: ' + (error.error.message || 'Unknown error'));
        }
      });
  }

}
