import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonContent, IonButton, IonIcon, IonItem, IonInput, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  mailOutline, 
  lockClosedOutline, 
  personOutline, 
  schoolOutline, 
  personCircleOutline,
  chevronBackOutline 
} from 'ionicons/icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [
    IonInput, IonItem, IonIcon, IonButton, IonContent, 
    IonButtons, IonBackButton, CommonModule, FormsModule, RouterModule
  ]
})
export class RegisterPage implements OnInit {

  constructor() {
    addIcons({ 
      mailOutline, 
      lockClosedOutline, 
      personOutline, 
      schoolOutline, 
      personCircleOutline,
      chevronBackOutline
    });
  }

  ngOnInit() {}
}