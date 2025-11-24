import { ApiService } from './../../service/api.service';
import { Component, inject } from '@angular/core';
import { IproductInterfaces } from '../../interfaces/iproduct.interfaces';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductoComponent } from "../producto-component/producto-component";
import { TotalComponent } from "../total-component/total-component";

@Component({
  selector: 'app-carrito-component',
  imports: [CommonModule, FormsModule, ProductoComponent, TotalComponent],
  templateUrl: './carrito-component.html',
  styleUrl: './carrito-component.css',
})
export class CarritoComponent {


    arrayCarrito: IproductInterfaces[];
    currency: String;
    ApiService = inject(ApiService);

  constructor(){
    this.arrayCarrito = [];
    this.currency="";
  }

      ngOnInit(): void {
        this.arrayCarrito = this.ApiService.getAllProducts();//Cuando se inicia la pagina traigo los datos de la api
        this.currency = this.ApiService.getCurrency();
        console.log(this.arrayCarrito);
        console.log(this.currency + "Hola");

      // Esperar 200 ms para que fetch termine, ya que me lo da vacio sino
      setTimeout(() => {
        this.currency = this.ApiService.getCurrency();

        console.log(this.arrayCarrito);
        console.log(this.currency + " Hola");
      }, 200);

      }






}
