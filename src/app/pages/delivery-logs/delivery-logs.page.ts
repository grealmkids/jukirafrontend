import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-delivery-logs',
  templateUrl: './delivery-logs.page.html',
  styleUrls: ['./delivery-logs.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, DatePipe]
})
export class DeliveryLogsPage implements OnInit {
  deliveryLogs = [
    {
      id: 1,
      recipient: 'John Doe',
      channel: 'WhatsApp',
      status: 'Sent',
      date: new Date('2025-08-20T10:30:00')
    },
    {
      id: 2,
      recipient: 'Jane Smith',
      channel: 'Email',
      status: 'Failed',
      date: new Date('2025-08-19T14:00:00')
    },
    {
      id: 3,
      recipient: 'Alice Brown',
      channel: 'SMS',
      status: 'Sent',
      date: new Date('2025-08-18T09:15:00')
    }
  ];

  constructor() { }

  ngOnInit() {
  }
}

