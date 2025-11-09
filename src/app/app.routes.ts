import { Routes } from '@angular/router';
import { UserLayoutComponent } from './layout/user-layout/user-layout.component';
import { HomeComponent } from './features/user/home/home.component';
import { MenuComponent } from './features/user/menu/menu.component';
import { ResultsComponent } from './features/user/results/results.component';
import { MyVotesComponent } from './features/user/my-votes/my-votes.component';
import { ProfileComponent } from './features/user/profile/profile.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { LoginComponent } from './features/auth/login/login.component';
import { SignupComponent } from './features/auth/signup/signup.component';

export const routes: Routes = [
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
    ],
  },
  {
    path: '',
    component: UserLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'menu', component: MenuComponent },
      { path: 'results', component: ResultsComponent },
      { path: 'me/votes', component: MyVotesComponent },
      { path: 'me/profile', component: ProfileComponent },
    ],
  },
  { path: '**', redirectTo: '' },
];
