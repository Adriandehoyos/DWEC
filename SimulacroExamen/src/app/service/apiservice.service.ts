import { Injectable } from '@angular/core';
import { Iproducto } from '../interfaces/Iproducto.interfaces';

@Injectable({
  providedIn: 'root',
})
export class ApiserviceService {


  private arrayProducts: Iproducto[];


  constructor(){
    this.arrayProducts = [];

          //Cargamos los productos de la api
      fetch('http://localhost:8080/api/products')
          .then(response => response.json())
          .then(apiData =>{
             //En este fetch a diferencia del otro no tengo que poner .products, ya que en el back me lo pasan como un array directamente
            apiData.forEach((producto: Iproducto) => {
              this.arrayProducts.push(producto);
            });


      });
  }

  getAllPro(): Iproducto[]{
    return this.arrayProducts;
  }



}
