import { ApiService } from './../../service/api.service';
import { Component, inject } from '@angular/core';
import { IproductInterfaces } from '../../interfaces/iproduct.interfaces';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carrito-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './carrito-component.html',
  styleUrl: './carrito-component.css',
})
export class CarritoComponent {


  arrayCarrito: IproductInterfaces[];
  currency: String;
  ApiService = inject(ApiService);

  constructor(){
    this.arrayCarrito = [{
      sku: "",
      title: "",
      price: ""
  }];
    this.currency = "";
  }

      ngOnInit(): void {
        this.arrayCarrito = this.ApiService.getAllProducts();//Cuando se inicia la pagina traigo los datos de la api
        this.currency = this.ApiService.getCurrency();
        console.log(this.arrayCarrito);
        console.log(this.currency);
      }





}
