import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, IonButton, 
  IonIcon, IonButtons, IonBackButton, IonAvatar, IonList, 
  IonItem, IonLabel, IonFooter 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  star, chevronBack, chatbubbleEllipsesOutline, 
  cameraOutline, shieldCheckmarkOutline, checkmarkCircle, closeCircle 
} from 'ionicons/icons';

@Component({
  selector: 'app-guide-detail',
  templateUrl: './guide-detail.page.html',
  styleUrls: ['./guide-detail.page.scss'],
  standalone: true,
  imports: [
    IonFooter, IonLabel, IonItem, IonList, IonAvatar, IonBackButton, 
    IonButtons, IonIcon, IonButton, IonContent, IonHeader, 
    IonTitle, IonToolbar, CommonModule, FormsModule, RouterModule
  ]
})
export class GuideDetailPage implements OnInit {

  constructor() {
    addIcons({ 
      star, chevronBack, chatbubbleEllipsesOutline, 
      cameraOutline, shieldCheckmarkOutline, checkmarkCircle, closeCircle 
    });
  }

  ngOnInit() {}
}