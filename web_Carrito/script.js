import { data } from "./scriptapi.js";
import { Carrito } from "./carrito.js";

const carrito = new Carrito();

document.addEventListener('DOMContentLoaded', function () {

    //Creo las cosas que voy a usar en la tabla como los botones
    const tablebody = document.getElementById('tbody');
    const bMas = document.createElement('button');
    const bMenos = document.createElement('button');
    const cajitaCant = document.createElement('Input');
    
    bMas.textContent = '+';
    bMenos.textContent = '-';
    cajitaCant.type = 'number'

// Crear filas con map
const filas = data.products.map(function (x) {
    const tr = document.createElement("tr");

    // Columna 1: título + SKU
    const td1 = document.createElement("td");
    td1.textContent = `${x.title} <br> ref: ${x.SKU}`; //arreglar esto 
    tr.append(td1);

    // Columna 2: botones y cantidad
    const td2 = document.createElement("td");
    td2.append()//Tengo que meter los botones todavia
    tr.append(td2);

    // Columna 3: precio
    const td3 = document.createElement("td");
    td3.textContent = `${x.price}${data.currency}`;
    tr.append(td3);

    // Columna 4: moneda
    const td4 = document.createElement("td");
    td4.textContent = data.currency;
    tr.append(td4);

    return tr; // devolvemos el <tr>
});

// Agregar todas las filas de golpe
tablebody.append(...filas);




    });