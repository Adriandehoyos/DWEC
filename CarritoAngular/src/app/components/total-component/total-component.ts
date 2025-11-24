import { Component, inject } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { CarritoService } from '../../service/carrito.service';
import { IprofinalInterfaces } from '../../interfaces/iprofinal.interfaces';

@Component({
  selector: 'app-total-component',
  imports: [],
  templateUrl: './total-component.html',
  styleUrl: './total-component.css',
})
export class TotalComponent {
 CarritoService = inject(CarritoService);
  ApiService = inject(ApiService);
  currency: String = "";
  arrayTotal: IprofinalInterfaces[];

  constructor(){
    this.arrayTotal = [];
  }



  ngOnInit(): void {
    //recogo los datos del array de productos seleccionados
    this.arrayTotal = this.CarritoService.getCarrito();
    //cojo la currency con el setTimeout
    setTimeout(() => {
      this.currency = this.ApiService.getCurrency();
    }, 200);
  }


  eliminar(sku: String):void{
    this.CarritoService.eliminarProducto(sku);
  }


}
