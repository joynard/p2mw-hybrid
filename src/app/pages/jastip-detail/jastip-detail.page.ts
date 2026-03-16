import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, IonItem, 
  IonLabel, IonButton, IonIcon, IonButtons, IonBackButton, 
  IonAvatar, IonTextarea, IonFooter 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { calendarOutline, star, chevronBack } from 'ionicons/icons';

@Component({
  selector: 'app-jastip-detail',
  templateUrl: './jastip-detail.page.html',
  styleUrls: ['./jastip-detail.page.scss'],
  standalone: true,
  imports: [
    IonFooter, IonTextarea, IonAvatar, IonBackButton, IonButtons, 
    IonIcon, IonButton, IonLabel, IonItem, IonContent, 
    IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterModule
  ]
})
export class JastipDetailPage implements OnInit {

  constructor() {
    addIcons({ calendarOutline, star, chevronBack });
  }

  ngOnInit() {}
}