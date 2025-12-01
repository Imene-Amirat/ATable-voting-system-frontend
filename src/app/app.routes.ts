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
import { OwnerLayoutComponent } from './layout/owner-layout/owner-layout.component';
import { DashboardComponent } from './features/owner/dashboard/dashboard.component';
import { NotificationsComponent } from './features/owner/notifications/notifications.component';
import { InsightsComponent } from './features/owner/insights/insights.component';
import { SettingsComponent } from './features/owner/settings/settings.component';
import { RequestsComponent } from './features/owner/requests/requests.component';
import { SchedulerComponent } from './features/owner/scheduler/scheduler.component';
import { DishEditComponent } from './features/owner/dish-edit/dish-edit.component';
import { DishNewComponent } from './features/owner/dish-new/dish-new.component';
import { RestaurantDishesComponent } from './features/owner/restaurant-dishes/restaurant-dishes.component';
import { DishesListComponent } from './features/owner/dishes-list/dishes-list.component';
import { RestaurantTeamComponent } from './features/owner/restaurant-team/restaurant-team.component';
import { RestaurantHoursComponent } from './features/owner/restaurant-hours/restaurant-hours.component';
import { RestaurantBrandingComponent } from './features/owner/restaurant-branding/restaurant-branding.component';
import { RestaurantEditComponent } from './features/owner/restaurant-edit/restaurant-edit.component';
import { RestaurantNewComponent } from './features/owner/restaurant-new/restaurant-new.component';
import { RestaurantsListComponent } from './features/owner/restaurants/restaurants-list.component';
import { RestaurantProfileComponent } from './features/owner/restaurant-profile/restaurant-profile.component';
import { roleGuard } from './core/guards/role.guard';
import { NotAuthorizedComponent } from './features/notAuthorized/not-authorized/not-authorized.component';

export const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
    ],
  },
  {
    path: 'owner',
    canActivate: [roleGuard],
    data: { roles: ['OWNER'] },
    component: OwnerLayoutComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'restaurants', component: RestaurantsListComponent },
      { path: 'restaurants/new', component: RestaurantNewComponent },
      { path: 'restaurants/:id', component: RestaurantProfileComponent },
      { path: 'restaurants/:id/edit', component: RestaurantEditComponent },
      { path: 'restaurants/:id/branding', component: RestaurantBrandingComponent },
      { path: 'restaurants/:id/hours', component: RestaurantHoursComponent },
      { path: 'restaurants/:id/team', component: RestaurantTeamComponent },
      { path: 'restaurants/:id/dishes', component: DishesListComponent },
      { path: 'restaurants/:id/dishes/new', component: DishNewComponent },
      { path: 'dishes/:dishId/edit', component: DishEditComponent },
      { path: 'scheduler', component: SchedulerComponent },
      { path: 'requests', component: RequestsComponent },
      { path: 'insights', component: InsightsComponent },
      { path: 'notifications', component: NotificationsComponent },
      { path: 'settings', component: SettingsComponent },
    ]
  },
  {
    path: 'user',
    canActivate: [roleGuard],
    data: { roles: ['USER'] },
    component: UserLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'menu', component: MenuComponent },
      { path: 'results', component: ResultsComponent },
      { path: 'me/votes', component: MyVotesComponent },
      { path: 'me/profile', component: ProfileComponent },
    ],
  },
  { path: 'not-authorized', component: NotAuthorizedComponent },
  { path: '**', redirectTo: 'auth/login' },
];
