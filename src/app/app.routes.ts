import { Routes } from '@angular/router';
import { UserLayoutComponent } from './layout/user-layout/user-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: UserLayoutComponent,
    children: [
      { path: '',   },
      { path: 'menu',   },
      { path: 'results',   },
      { path: 'me/votes',   },
      { path: 'me/profile',   },
    ]
  }
];
