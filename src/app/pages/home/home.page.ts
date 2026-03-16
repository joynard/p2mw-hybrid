import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, IonCard, 
  IonCardHeader, IonCardTitle, IonCardContent, IonIcon, 
  IonSearchbar, IonCardSubtitle 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { bagHandle, map } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonCardSubtitle, IonSearchbar, IonIcon, IonCardContent, 
    IonCardTitle, IonCardHeader, IonCard, IonContent, 
    IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterModule
  ]
})
export class HomePage implements OnInit {

  constructor() {
    addIcons({ bagHandle, map });
  }

  ngOnInit() {}

}