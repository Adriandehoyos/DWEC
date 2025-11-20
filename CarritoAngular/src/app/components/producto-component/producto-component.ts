import { CarritoService } from './../../service/carrito.service';
import { ApiService } from './../../service/api.service';
import { Component, inject, Input } from '@angular/core';
import { IproductInterfaces } from '../../interfaces/iproduct.interfaces';

@Component({
  selector: 'app-producto-component',
  imports: [],
  templateUrl: './producto-component.html',
  styleUrl: './producto-component.css',
})
export class ProductoComponent {

  ApiService = inject(ApiService);
  CarritoService = inject(CarritoService);

  @Input() miProducto!: IproductInterfaces;
  currency: String;

  constructor(){
    this.currency="";
  }

  ngOnInit(): void {
    this.currency = this.ApiService.getCurrency();//Hago el get de la moneda para pasarlo en cada card

  }

  sumarCantidad(){

  }






}
