import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginComponent } from './pages/login/login.component';
import { loginGuard, publicGuard } from './guards/login-guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NinjaListComponent } from './pages/ninja-list/ninja-list.component';
import { NinjaFormComponent } from './pages/ninja-form/ninja-form.component';
import { VerMasComponent } from './pages/ver-mas/ver-mas.component';

export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'landing'},
  {path: 'landing', component: LandingPageComponent},
  {path: 'login', component: LoginComponent, canActivate: [publicGuard]},
  {path: 'dashboard', component: DashboardComponent, canActivate: [loginGuard], children:
    [
      {path: 'ninjas', component: NinjaListComponent},
      {path: 'formulario', component: NinjaFormComponent},
      {path: 'formulario/:id', component: NinjaFormComponent}, //actualizar
      {path: 'ninjas/:id', component: VerMasComponent}
    ]
  },

  {path: '**', redirectTo: 'landing'}
];
