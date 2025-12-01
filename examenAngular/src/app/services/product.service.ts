import { Iproduct } from './../interfaces/iproduct.interface';
import { Injectable } from '@angular/core';
import {v4 as uuidv4} from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private arrayProducts: Iproduct[];
  //declaro el array de categories
  private categories: string[] = [];

  constructor(){
    this.arrayProducts = [];
    //añado a mano las 3 categorias
    this.categories.push("hombre");
    this.categories.push("mujer");
    this.categories.push("niño");

              //Cargamos los productos de la api
      fetch('http://localhost:8080/api/products')
          .then(response => response.json())
          .then(apiData =>{
             //En este fetch a diferencia del otro no tengo que poner .products, ya que en el back me lo pasan como un array directamente
            apiData.forEach((producto: Iproduct) => {
              this.arrayProducts.push(producto);
            });


      });

  }

  //get todos los productos
  getAllPro(): Iproduct[]{
    return this.arrayProducts;
  }

  //get de las categorias
  getAllCategory(): string[]{
    return this.categories;
  }

  //get por categoria
  getByCategory(categoria: string): Iproduct[]{
    return this.arrayProducts.filter(p => p.category.includes(categoria));
  }

  //get por active
  // getByActive(act: string): Iproduct[] {
  //   if(act){
  //     return this.arrayProducts.filter(p => p.active == true);
  //   }else{
  //     return this.arrayProducts.filter(p => p.active == false);
  //   }
  // }

  //get por id
  getById(miId: string): Iproduct{
    let producto: Iproduct;
    let response = this.arrayProducts.find(p => p.id === miId);

    if (response != undefined) {
        producto = response;
      }
      else {
          producto = {
              id: "",
              name: "Producto no encontrado",
              description: "Contacte con el adminsitrador",
              category:"error"
          }
      }
      return producto;
  }

  //metodo para añadir producto
  insertProducto(producto: Iproduct): void{
    if(!this.arrayProducts.includes(producto) && producto != null){
      let myuuid = uuidv4();//generamos el uuid
      producto.id = myuuid; //le igulamas el uuid generado
      this.arrayProducts.push(producto);

    }
  }

  //metodo para eliminar
  deleteById(id: string): void{
    let i = this.arrayProducts.findIndex(producto => producto.id == id);
    if (i != -1 && i >= 0 && i < this.arrayProducts.length) {
    this.arrayProducts.splice(i, 1);
      }
}

    updatePro(producto: Iproduct): void {
        let i = this.arrayProducts.findIndex(p => p.id == producto.id);
        console.log(producto);
        producto.id = this.arrayProducts[i].id;


        if (i != -1 && i >= 0 && i < this.arrayProducts.length) {
            this.arrayProducts.splice(i, 1);
        }

        this.arrayProducts.push(producto);

    }


}
