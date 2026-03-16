import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardContent, IonCardTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-guide-list',
  templateUrl: './guide-list.page.html',
  styleUrls: ['./guide-list.page.scss'],
  standalone: true,
  imports: [IonCardTitle, IonCardContent, IonCardHeader, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class GuideListPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
