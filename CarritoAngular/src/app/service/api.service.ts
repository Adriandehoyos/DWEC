import { IproductInterfaces } from './../interfaces/iproduct.interfaces';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  private datos: IproductInterfaces[];
  private moneda: String;

  constructor(){
        this.moneda = "";
        this.datos = [];
          //Cargamos los productos de la api
      fetch('http://localhost:8080/api/carrito')
          .then(response => response.json())
          .then(apiData =>{
            apiData.products.forEach((producto: IproductInterfaces) => {
              this.datos.push(producto);
              this.moneda = apiData.currency;
            });


      });
    }
  getAllProducts(): IproductInterfaces[]{

    return this.datos;
  }
  getCurrency(){
    return this.moneda;
  }

}


