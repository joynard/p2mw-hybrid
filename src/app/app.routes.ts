import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },

  {
    path: 'splash',
    loadComponent: () =>
      import('./pages/splash/splash.page').then(m => m.SplashPage)
  },

  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.page').then(m => m.LoginPage)
  },

  {
    path: 'register',
    loadComponent: () =>
      import('./pages/register/register.page').then(m => m.RegisterPage)
  },

  {
    path: 'tabs',
    loadChildren: () =>
      import('./tabs/tabs.routes').then(m => m.routes)
  },

  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.page').then(m => m.HomePage)
  },

  {
    path: 'jastip-list',
    loadComponent: () =>
      import('./pages/jastip-list/jastip-list.page').then(m => m.JastipListPage)
  },

  {
    path: 'jastip-detail',
    loadComponent: () =>
      import('./pages/jastip-detail/jastip-detail.page').then(m => m.JastipDetailPage)
  },

  {
    path: 'guide-list',
    loadComponent: () =>
      import('./pages/guide-list/guide-list.page').then(m => m.GuideListPage)
  },

  {
    path: 'guide-detail',
    loadComponent: () =>
      import('./pages/guide-detail/guide-detail.page').then(m => m.GuideDetailPage)
  },

  {
    path: 'booking',
    loadComponent: () =>
      import('./pages/booking/booking.page').then(m => m.BookingPage)
  },

  {
    path: 'profile',
    loadComponent: () =>
      import('./pages/profile/profile.page').then(m => m.ProfilePage)
  }

];