import { Routes } from '@angular/router';
import { LogIn } from './pages/log-in/log-in';
import { Dashboard } from './pages/dashboard/dashboard';
import { LandingPage } from './pages/landing-page/landing-page';
import { loginGuard, publicGuard } from './guards/login-guard';
import { HerosList } from './pages/heros-list/heros-list';
import { HerosForm } from './pages/heros-form/heros-form';
import { Herosview } from './pages/herosview/herosview';

export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: LandingPage},
  {path: 'login', component: LogIn , canActivate: [publicGuard]},
  {path: 'dashboard', component: Dashboard, canActivate: [loginGuard], children:
    [
      {path: 'heros', component: HerosList},
      {path: 'herosForm', component: HerosForm},
      {path: 'heros/:id', component: Herosview},
      {path: 'herosForm/:id', component: HerosForm}
    ]
  },



  {path: '**', redirectTo: 'home'}
];
