import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NoticiasComponent } from "./components/noticias-component/noticias-component";

@Component({
  selector: 'app-root',
  imports: [NoticiasComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('blogAngular');
}
