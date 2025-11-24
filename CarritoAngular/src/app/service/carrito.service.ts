import { Injectable } from '@angular/core';
import { IprofinalInterfaces } from '../interfaces/iprofinal.interfaces';
import { IproductInterfaces } from '../interfaces/iproduct.interfaces';

@Injectable({
  providedIn: 'root',
})
//service para manejar todos los datos de los productos añadidos al carrito
export class CarritoService {

  //array donde tengo los tengo con cantidad
  private productoCarrito: IprofinalInterfaces[];

  constructor(){
    this.productoCarrito = [];
  }

  //get de todo el carrito de items seleccionados
    getCarrito(): IprofinalInterfaces[] {
    return this.productoCarrito;
  }

    //añadir un producto
    añadirProducto(producto: IproductInterfaces): void {
    // buscar si el producto ya está en el carrito
    const itemExistente = this.productoCarrito.find(
      item => item.producto.sku === producto.sku
    );

    if (itemExistente) {
      //si ya existe, solo incrementamos la cantidad
      itemExistente.cantidad++;
    } else {
      //si no existe, lo añadimos con cantidad 1
      this.productoCarrito.push({
        producto: producto,
        cantidad: 1

      });
    }
  }

  //Eliminar un producto
    eliminarProducto(sku: String): void{
      //El eliminar de tu github, con el filter me estaba dando fallos
        let i = this.productoCarrito.findIndex(item => item.producto.sku == sku);
        if (i != -1 && i >= 0 && i < this.productoCarrito.length) {
            this.productoCarrito.splice(i, 1);
        }
    }

    //quitar cantidad de un producto
    quitarCantidad(sku: string): void {
    const item = this.productoCarrito.find(item => item.producto.sku === sku);

    if (item) {
      item.cantidad--;

      //Si la cantidad llega a 0, eliminamos el producto del carrito
      if (item.cantidad <= 0) {
        this.eliminarProducto(sku);
      }
    }
  }

  //Calcular el subtotal, precio x cantidad
    calcularSubtotal(sku: string): number {
    const item = this.productoCarrito.find(item => item.producto.sku === sku);
    if (item) {
      //parseFloat, porque en el back el precio esta como String
      const precio = parseFloat(item.producto.price);
      return precio * item.cantidad;
    }else{
      return 0;
    }
  }


   //Calcula el total del carrito (suma de todos los subtotales)
  calcularTotal(): number {
    let total = 0; // acumulador

    for (let i = 0; i < this.productoCarrito.length; i++) {
      const item = this.productoCarrito[i];
      //parseFloat, porque en el back el precio esta como String
      const precio = parseFloat(item.producto.price);
      total += precio * item.cantidad; // sumamos al total
    }
    return total;
  }

  //metodo para mostrar la cantidad de cada producto que hay en el carrito
    getCantidadProducto(sku: string): number {
    const item = this.productoCarrito.find(item => item.producto.sku === sku);
    if(item){
      return item.cantidad
    }else{
      return 0;
    }
  }




}
