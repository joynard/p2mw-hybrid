import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonButton, IonInput } from '@ionic/angular/standalone';

@Component({
  selector: 'app-jastip-detail',
  templateUrl: './jastip-detail.page.html',
  styleUrls: ['./jastip-detail.page.scss'],
  standalone: true,
  imports: [IonInput, IonButton, IonLabel, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class JastipDetailPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
