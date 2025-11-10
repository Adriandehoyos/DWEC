import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar-component/navbar-component";
import { NoticiasComponent } from "./components/noticias-component/noticias-component";

@Component({
  selector: 'app-root',
  imports: [ NavbarComponent, NoticiasComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('blogAngular');
}
