import { data } from "./scriptapi.js";
import { Carrito } from "./carrito.js";

const carrito = new Carrito();

document.addEventListener('DOMContentLoaded', function () {

    //Creo las cosas que voy a usar en la tabla como los botones
    const tablebody = document.getElementById('tbody');
    const bMas = document.createElement('button');
    const bMenos = document.createElement('button');
    const cajitaCant = document.createElement('Input');
    


    

    tablebody.innerHTML = data.products.map(function(x){
        return`
        <tr>
            <td>${x.title} <br> ref: ${x.SKU}</td>
            <td>${bMenos}${cajitaCant}${bMas}</td> 
            <td>${x.price}${data.currency}</td>
            <td>${data.currency}</td>
        </tr>
        `
        }).join("");//Este join es para poder usar la comilla ` en el map y luego no se me muestre en la tabla.



    });