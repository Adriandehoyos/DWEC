import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { SobrenosotrosComponent } from './pages/sobrenosotros/sobrenosotros.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { VermasComponent } from './pages/vermas/vermas.component';

export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'inicio'},
  {path: 'inicio', component: InicioComponent},
  {path: 'productos', component: ProductosComponent,},
  {path: 'productos/:id', component: VermasComponent},
  {path: 'sobrenosotros', component: SobrenosotrosComponent},
  {path: 'formulario', component: FormularioComponent},
  {path: '**', redirectTo: 'inicio'}

];
