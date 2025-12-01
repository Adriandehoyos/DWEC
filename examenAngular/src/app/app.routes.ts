import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductFormComponent } from './pages/product-form/product-form.component';
import { VermasComponent } from './pages/vermas/vermas.component';

export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'inicio'},//ruta para que nada mas iniciar entre en home
  {path: 'home', component: HomeComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'products/:id', component: VermasComponent},
  {path: 'form', component: ProductFormComponent},
  {path: 'form/:id', component: ProductFormComponent},//ruta para el actualizar
  {path: '**', redirectTo: 'home'}//ruta para que si mete cualquier url no puesta aqui le lleve a home

];
