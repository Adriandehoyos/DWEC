import { data } from "./scriptapi";

export class Carrito {
    constructor() {
        this.currency = "€";
        this.productos = [];
    }


// Método que actualiza o añade productos
actualizarUnidades(sku, unidades) {
    // Buscamos si el producto ya existe en el carrito
    const item = this.items.find(function(p) {
        return p.sku === sku;
    });

    if (item) {
        // Si ya existe → cambiamos la cantidad
        item.quantity = unidades;
    } else {
        // Si no existe → lo añadimos
        this.productos.push({ sku, quantity: unidades });
    }
}














}//