import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // Tambah ini untuk routerLink
import { IonContent, IonButton, IonIcon, IonItem, IonInput } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { mailOutline, lockClosedOutline, logoGoogle } from 'ionicons/icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonInput, IonItem, IonIcon, IonButton, IonContent, CommonModule, FormsModule, RouterModule]
})
export class LoginPage implements OnInit {

  constructor(private router: Router) {
    addIcons({ mailOutline, lockClosedOutline, logoGoogle });
  }

  ngOnInit() {}

  onLogin() {
    // Di sini nanti tempat validasi login (API call)
    // Untuk sekarang, langsung arahkan ke home
    this.router.navigate(['/tabs/home'], { replaceUrl: true });
  }

}