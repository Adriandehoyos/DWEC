import { Component } from '@angular/core';
import { FormularioComponent } from '../noticias-component/formulario-component/formulario-component';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-navbar-component',
  imports: [RouterLink],
  templateUrl: './navbar-component.html',
  styleUrl: './navbar-component.css',
})
export class NavbarComponent {

}
