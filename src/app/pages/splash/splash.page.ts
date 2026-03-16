import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { heartHalfOutline } from 'ionicons/icons';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
  standalone: true,
  imports: [IonIcon, IonContent, CommonModule, FormsModule]
})
export class SplashPage implements OnInit {

  constructor(private router: Router) {
    addIcons({ heartHalfOutline });
  }

  ngOnInit() {
    // 3 detik agar animasi loading selesai
    setTimeout(() => {
      this.router.navigate(['/login'], { replaceUrl: true });
    }, 3000);
  }
}