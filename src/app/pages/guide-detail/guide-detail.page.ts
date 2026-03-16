import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-guide-detail',
  templateUrl: './guide-detail.page.html',
  styleUrls: ['./guide-detail.page.scss'],
  standalone: true,
  imports: [IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class GuideDetailPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
