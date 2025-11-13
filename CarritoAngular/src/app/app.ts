import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarritoComponent } from "./components/carrito-component/carrito-component";

@Component({
  selector: 'app-root',
  imports: [ CarritoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('CarritoAngular');
}
