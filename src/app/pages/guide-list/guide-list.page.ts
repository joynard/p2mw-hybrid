import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, IonCard, 
  IonCardHeader, IonCardTitle, IonCardContent, IonIcon, 
  IonSearchbar, IonAvatar 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { star, locationOutline } from 'ionicons/icons';

@Component({
  selector: 'app-guide-list',
  templateUrl: './guide-list.page.html',
  styleUrls: ['./guide-list.page.scss'],
  standalone: true,
  imports: [
    IonAvatar, IonSearchbar, IonIcon, IonCardContent, 
    IonCardTitle, IonCardHeader, IonCard, IonContent, 
    IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterModule
  ]
})
export class GuideListPage implements OnInit {

  constructor() {
    addIcons({ star, locationOutline });
  }

  ngOnInit() {}
}