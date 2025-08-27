import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.page.html',
  styleUrls: ['./credits.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, CurrencyPipe]
})
export class CreditsPage implements OnInit {
  currentCredits = 15; // Mock current credits
  selectedPlan: any;

  plans = [
    { name: 'Starter', credits: 10, price: 5.00 },
    { name: 'Essential', credits: 25, price: 10.00 },
    { name: 'Pro', credits: 75, price: 25.00 },
    { name: 'Enterprise', credits: 200, price: 60.00 },
  ];

  constructor() { }

  ngOnInit() {
  }

  selectPlan(plan: any) {
    this.selectedPlan = plan;
  }

  purchaseCredits() {
    if (this.selectedPlan) {
      console.log(`Purchasing ${this.selectedPlan.credits} credits for ${this.selectedPlan.price}`);
      // TODO: Implement actual payment gateway integration
      this.currentCredits += this.selectedPlan.credits;
      alert(`Successfully purchased ${this.selectedPlan.credits} credits! Your new balance is ${this.currentCredits}.`);
      this.selectedPlan = null; // Reset selection
    } else {
      alert('Please select a plan first.');
    }
  }
}
