import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule, RouterLink]
})
export class SignupPage implements OnInit {
  name!: string;
  email!: string;
  phone!: string;
  password!: string;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
  }

  onSignup() {
    console.log('Signup button clicked', { name: this.name, email: this.email, phone: this.phone, password: this.password });
    this.http.post('http://localhost:3000/auth/signup', { name: this.name, email: this.email, phone: this.phone, password: this.password })
      .subscribe({
        next: (response: any) => {
          console.log('Signup successful', response);
          alert('Signup successful!');
          this.router.navigate(['/tabs']);
        },
        error: (error: any) => {
          console.error('Signup failed', error);
          alert('Signup failed: ' + (error.error.message || 'Unknown error'));
        }
      });
  }

}
