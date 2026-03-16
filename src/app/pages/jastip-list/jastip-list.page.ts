import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, IonCard, 
  IonCardHeader, IonCardTitle, IonCardContent, IonIcon, 
  IonCardSubtitle 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { calendarClearOutline } from 'ionicons/icons';

@Component({
  selector: 'app-jastip-list',
  templateUrl: './jastip-list.page.html',
  styleUrls: ['./jastip-list.page.scss'],
  standalone: true,
  imports: [
    IonCardSubtitle, IonIcon, IonCardContent, IonCardTitle, 
    IonCardHeader, IonCard, IonContent, IonHeader, 
    IonTitle, IonToolbar, CommonModule, FormsModule, RouterModule
  ]
})
export class JastipListPage implements OnInit {

  constructor() {
    addIcons({ calendarClearOutline });
  }

  ngOnInit() {}
}