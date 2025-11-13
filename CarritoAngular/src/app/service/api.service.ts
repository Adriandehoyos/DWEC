import { IproductInterfaces } from './../interfaces/iproduct.interfaces';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  private datos: IproductInterfaces[];
  private currency: String;

  constructor(){
        this.currency = "";
        this.datos = [];
          //Cargamos los productos de la api
      fetch('http://localhost:8080/api/carrito')
          .then(response => response.json())
          .then(apiData =>{
              this.currency = apiData.currency;
              this.datos.push(apiData.products);
      });
    }
  getAllProducts(): IproductInterfaces[]{
    return this.datos;
  }
  getCurrency(){
    return this.currency;
  }

}


