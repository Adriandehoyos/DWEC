import { Injectable } from '@angular/core';
import { Iproducto } from '../interfaces/Iproducto.interfaces';

@Injectable({
  providedIn: 'root',
})
export class ApiserviceService {


  private arrayProducts: Iproducto[];
  private id: number;
  //declaro el array de categories
  private categories: string[] = [];


  constructor(){
    this.arrayProducts = [];
    this.id = 18;
    //añado a mano las 3 categorias
    this.categories.push("hombre");
    this.categories.push("mujer");
    this.categories.push("niño");
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


  //metodo para llevarte todos los productos
  getAllPro(): Iproducto[]{
    return this.arrayProducts;
  }

  //get categorias
  getAllCategory(): string[]{
    return this.categories;
  }

  //get por id
  getById(miId: number): Iproducto{
    let producto: Iproducto;
    let response = this.arrayProducts.find(p => p.id === miId);
    console.log("ARRAY EN GETBYID:", this.arrayProducts);
    console.log("BUSCO ID:", miId);

    if (response != undefined) {
        producto = response;
      }
      else {
          producto = {
              id: -1,
              name: "Producto no encontrado",
              description: "Contacte con el adminsitrador",
              category:"error"
          }
      }
      return producto;
  }

  //get por categoria para el filtrado
    getProductByCategory(categoria: string): Iproducto[] {
        return this.arrayProducts.filter(producto => producto.category.includes(categoria));
    }


  //metodo para añadir producto
  insertProducto(producto: Iproducto): void{
    if(!this.arrayProducts.includes(producto) && producto != null){
      producto.id = this.id; //igualamos el id al id que tenemos declarado en el service, para que no lo tenga que meter el usuario manualmente
      this.arrayProducts.push(producto);
      this.id++;//aumentamos el id cada vez que añadimos un producto
    }
  }

  //metodo para eliminar
  deleteById(id: number): void{
      let i = this.arrayProducts.findIndex(producto => producto.id == id);
      if (i != -1 && i >= 0 && i < this.arrayProducts.length) {
      this.arrayProducts.splice(i, 1);
        }
  }



}
