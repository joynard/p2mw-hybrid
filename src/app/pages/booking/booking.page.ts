import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, IonDatetime, 
  IonItem, IonLabel, IonInput, IonButton, IonButtons, 
  IonBackButton, IonIcon, IonModal, IonDatetimeButton, IonCheckbox 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  receiptOutline, calendarOutline, peopleOutline, 
  walletOutline, chevronBack 
} from 'ionicons/icons';
import { AlertController } from '@ionic/angular'; // Untuk pop-up sukses

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
  standalone: true,
  imports: [
    IonCheckbox, IonDatetimeButton, IonModal, IonIcon, IonBackButton, 
    IonButtons, IonButton, IonInput, IonLabel, IonItem, 
    IonDatetime, IonContent, IonHeader, IonTitle, IonToolbar, 
    CommonModule, FormsModule
  ]
})
export class BookingPage implements OnInit {

  constructor(private alertController: AlertController) {
    addIcons({ 
      receiptOutline, calendarOutline, peopleOutline, 
      walletOutline, chevronBack 
    });
  }

  ngOnInit() {}

  async processBooking() {
    const alert = await this.alertController.create({
      header: 'Pembayaran Berhasil!',
      message: 'Pesanan kamu telah dikirim ke Andi. Tunggu konfirmasinya ya!',
      buttons: ['Mantap!']
    });

    await alert.present();
  }
}