import { Routes } from '@angular/router';
import { UserListComponent } from './pages/user-list/user-list.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { VerMasComponent } from './pages/ver-mas/ver-mas.component';

export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: UserListComponent},
  {path: 'formulario', component: FormularioComponent},
  {path: 'user/:_id', component: VerMasComponent},
  {path: 'formulario/:_id', component: FormularioComponent},
  {path: '**', redirectTo: 'home'}
];
