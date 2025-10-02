import { data } from "./scriptapi.js";

export class Carrito {
    constructor() {
        this.currency = "€";
        this.productos = [];
    }


// Método que actualiza o añade productos
actualizarUnidades(sku, unidades) {
    // Buscamos si el producto ya existe en el carrito
    const item = this.productos.find(function(p) {
        return p.sku === sku;
    });

    if (item) {
        // Si ya existe → cambiamos la cantidad
        item.quantity = unidades;
    } else {
        //Buscamos el producto en la api
        const productoApi = data.products.find(function(p){
            return p.SKU === sku;
        });
        if (productoApi){
            //Añadimos todos sus datos de la api para el constructor de productos
            this.productos.push({
                    sku: productoApi.SKU,
                    title: productoApi.title,
                    price: productoApi.price,
                    quantity: unidades
            });
        }else{
            console.error("Producto no encontrado")
        }
    }
}















}//
const carrito = new Carrito();
carrito.actualizarUnidades("TGD5XORY1L", 2);
console.log(carrito.productos);