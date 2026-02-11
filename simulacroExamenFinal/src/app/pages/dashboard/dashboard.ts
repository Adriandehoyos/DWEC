import { Component } from '@angular/core';
import { NavBar } from "../../components/nav-bar/nav-bar";
import { Footer } from "../../components/footer/footer";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [NavBar, RouterOutlet, Footer],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

}
