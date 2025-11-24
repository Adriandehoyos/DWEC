import { IproductInterfaces } from './../interfaces/iproduct.interfaces';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  private datos: IproductInterfaces[];
  private currency : String;

  constructor(){
        this.datos = [];
        this.currency = "";
          //Cargamos los productos de la api
      fetch('http://localhost:8080/api/carrito')
          .then(response => response.json())
          .then(apiData =>{
            this.currency = apiData.currency;
            apiData.products.forEach((producto: IproductInterfaces) => {
              this.datos.push(producto);
            });


      });
    }
  getAllProducts(): IproductInterfaces[]{

    return this.datos;
  }
  getCurrency(): String{
    return this.currency;
  }

}


