import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Tambah Router
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, 
  IonList, IonItem, IonLabel, IonButtons 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  personOutline, briefcaseOutline, notificationsOutline, 
  helpCircleOutline, logOutOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [
    IonLabel, IonItem, IonList, IonIcon, IonContent, 
    IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule
  ]
})
export class ProfilePage implements OnInit {

  constructor(private router: Router) {
    addIcons({ 
      personOutline, briefcaseOutline, notificationsOutline, 
      helpCircleOutline, logOutOutline
    });
  }

  ngOnInit() {}

  onLogout() {
    // Navigasi balik ke login dan hapus history
    this.router.navigate(['/login'], { replaceUrl: true });
  }
}