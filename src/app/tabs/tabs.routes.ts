import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('../pages/home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'jastip-list',
        loadComponent: () =>
          import('../pages/jastip-list/jastip-list.page').then((m) => m.JastipListPage),
      },
      {
        path: 'guide-list',
        loadComponent: () =>
          import('../pages/guide-list/guide-list.page').then((m) => m.GuideListPage),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('../pages/profile/profile.page').then((m) => m.ProfilePage),
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
    ],
  },
];