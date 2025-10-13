export class Carrito {
    constructor() {
        this.currency = "€";
        this.productos = [];//array en el que metere los productos cuando se añaden unidades
        this.products = [];//array donde cargo todo el array de productos de la API
    }



// Método que actualiza la cantidad y crea el producto con cantidad para la parte derecha con el total general
actualizarUnidades(sku, unidades) {
    // Buscamos si el producto ya existe en el carrito
    const item = this.productos.find(function(p) {
        return p.sku === sku;
    });

    if (item) {
        // Si ya existe, cambiamos la cantidad
        item.quantity = unidades;
    } else {
        //Buscamos el producto en la api
        const productoApi = this.products.find(function(p){
            return p.sku === sku;
        });
        if (productoApi){
            //Añadimos todos sus datos de la api para el constructor de productos, pero ahora con cantidad
            this.productos.push({
                    sku: productoApi.sku,
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
