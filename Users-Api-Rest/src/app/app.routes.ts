import { Routes } from '@angular/router';
import { UserListComponent } from './pages/user-list/user-list.component';
import { FormularioComponent } from './pages/formulario/formulario.component';

export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: UserListComponent},
  {path: 'formulario', component: FormularioComponent}
];
