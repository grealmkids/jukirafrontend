import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController, IonicModule } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-card-preview',
  templateUrl: './card-preview.page.html',
  styleUrls: ['./card-preview.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule]
})
export class CardPreviewPage implements OnInit {
  birthday: any;
  message = 'Wishing you the best on your special day!';
  generatedCards: any[] = [];
  selectedCard: any; // Stores the ID of the selected card

  get currentSelectedCard() {
    return this.generatedCards.find(card => card.id === this.selectedCard);
  }

  // Mock data - in a real app, this would come from a service
  private mockBirthdays = [
    {
      id: 1,
      name: 'John Doe',
      date: new Date('2025-09-15'),
      photoUrl: 'https://i.pravatar.cc/150?u=john',
      category: 'Friend',
    },
    {
      id: 2,
      name: 'Jane Smith',
      date: new Date('2025-10-01'),
      photoUrl: 'https://i.pravatar.cc/150?u=jane',
      category: 'Family',
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private actionSheetCtrl: ActionSheetController,
    private http: HttpClient
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.birthday = this.mockBirthdays.find(b => b.id === +id);
      // Automatically generate cards when the page loads
      this.generateCardVariations();
    }
  }

  generateCardVariations() {
    if (!this.birthday) return;

    console.log('Generating card variations for:', this.birthday.name);
    // Call backend API to generate cards
    this.http.post('http://localhost:3000/cards/generate', {
      birthday_id: this.birthday.id,
      message: this.message,
      theme: 'festive' // Example theme
    })
    .subscribe({
      next: (response: any) => {
        this.generatedCards = response.cards;
        if (this.generatedCards.length > 0) {
          this.selectedCard = this.generatedCards[0].id; // Select the first card by default
        }
        console.log('Generated cards:', this.generatedCards);
      },
      error: (error: any) => {
        console.error('Failed to generate cards:', error);
        alert('Failed to generate cards: ' + (error.error.message || 'Unknown error'));
      }
    });
  }

  async presentSendOptions() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Send via',
      buttons: [
        {
          text: 'WhatsApp',
          icon: 'logo-whatsapp',
          handler: () => {
            this.sendCard('WhatsApp');
          }
        },
        {
          text: 'SMS',
          icon: 'chatbubbles-outline',
          handler: () => {
            this.sendCard('SMS');
          }
        },
        {
          text: 'Email',
          icon: 'mail-outline',
          handler: () => {
            this.sendCard('Email');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          icon: 'close'
        }
      ]
    });
    await actionSheet.present();
  }

  sendCard(channel: string) {
    // TODO: Implement actual sending logic via backend API
    console.log(`Sending card to ${this.birthday.name} via ${channel} with message: "${this.message}"`);
    // Here you would typically call a service that makes an HTTP request
  }
}
