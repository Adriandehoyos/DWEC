import { data } from "./scriptapi.js";
import { Carrito } from "./carrito.js";

const carrito = new Carrito();

document.addEventListener('DOMContentLoaded', function () {

    //Creo las cosas que voy a usar en la tabla como los botones
    const tablebody = document.getElementById('tbody');
    




    //Crear las filas con los productos
    data.products.forEach(item =>{
    


        //Creamos la fila
        const fila = document.createElement('tr');

        //La fila con producto
        const proYref = document.createElement('td');
        proYref.innerHTML = `${item.title}<br>${item.SKU}`;
        fila.append(proYref);

        //Fila de cantidad
        const cantidad = document.createElement('td');

            //Boton menos
            const bMenos = document.createElement('button');
            bMenos.textContent = '-';
            bMenos.disabled = true;
            cantidad.append(bMenos);


            //caja con el numero
            const cajitaCant = document.createElement('Input'); 
            cajitaCant.type = 'number'
            cajitaCant.readOnly = true;
            cajitaCant.value = 0;
            cantidad.append(cajitaCant);

            //Boton mas
            const bMas = document.createElement('button');
            bMas.textContent = '+';
            cantidad.append(bMas);
            

        //añado cantidad a la fila
        fila.append(cantidad);


        //Fila de Precio Unidad
        const pUnidad = document.createElement('td');
        pUnidad.textContent = `${item.price}${data.currency}`;
        fila.append(pUnidad);

        //Fila de Total
        const total = document.createElement('td');
        //If para que muestre a 0 si no hay ninguna unidad
        if(Number(cajitaCant.value) === 0){
            total.textContent = `0${data.currency}`;
        }
        fila.append(total);


        //funcion calcular total de cada producto
            function actualizarTotal() {
            const cant = Number(cajitaCant.value);
            const totalCalculado = cant * item.price;
            total.textContent = `${totalCalculado.toFixed(2)}${data.currency}`;//Aqui le limito a 2 decimales para la estetica sino da demasiados decimales
        }

        //eventos botones

        //Boton menos
        //Funcionalidad para que si hay 0 productos no pueda seguir restando
        bMenos.addEventListener('click',() => {
            if(Number(cajitaCant.value) === 0){
                bMenos.disabled = true;
            }else{
                bMenos.disabled = false;
                cajitaCant.value--;
                actualizarTotal();
            }
        });

        //Boton mas
        bMas.addEventListener('click',() => {
            cajitaCant.value++;
            bMenos.disabled = false;
            actualizarTotal();
        });

        
        //agregar la fila a la tabla
        tablebody.append(fila);
    });




    });