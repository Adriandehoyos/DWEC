import { Routes } from '@angular/router';
import { LandingPage } from './pages/landing-page/landing-page';
import { Login } from './pages/login/login';
import { loginGuard, publicGuard } from './guards/login-guard';
import { Dashboard } from './pages/dashboard/dashboard';
import { HeroList } from './pages/hero-list/hero-list';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'landing'},
    {path: 'landing', component: LandingPage},
    {path: 'login', component: Login, canActivate: [publicGuard]},
    {path: 'dashboard', component: Dashboard, canActivate: [loginGuard], children:
        [
            {path: 'heroes', component: HeroList},
        ]
    },

      {path: '**', redirectTo: 'landing'}
];
