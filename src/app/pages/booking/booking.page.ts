import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonDatetime, IonItem, IonLabel, IonInput, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
  standalone: true,
  imports: [IonButton, IonInput, IonLabel, IonItem, IonDatetime, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class BookingPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
