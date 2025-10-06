import { data } from "./scriptapi.js";
import { Carrito } from "./carrito.js";

const carrito = new Carrito();

document.addEventListener('DOMContentLoaded', function () {

    //declaro las dos tbody del Index
    const tablebody = document.getElementById('tbody');
    const tablebodytotal = document.getElementById('tbodytotal');
    let allPrice; //Creo el allprice primero para que pueda pasar la funcion antes del foreach y no se me descoloque el orden de las cosas


    //Funcion para calcular el total de todos los productos
    function actualizarTotalGeneral() {
        let totalGeneral = 0;

        carrito.productos.forEach(p => {
            totalGeneral += p.price * p.quantity;
        });

        // Actualiza el td del total
        allPrice.textContent = `${totalGeneral.toFixed(2)}${data.currency}`;
    }


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

        //agregar la fila entera a la tabla
        tablebody.append(fila);


        //Creamos la fila del total
        const filaTotal = document.createElement('tr');
        //Donde saldra el titulo del producto que se ha añadido
        const pro = document.createElement('td');  
        filaTotal.append(pro);
        //Fila precio total
        const price = document.createElement('td');
        filaTotal.append(price);
        //Añadimos la fila entera a la tabla
        tablebodytotal.append(filaTotal);



        //FUNCIONALIDADES
        //funcion calcular total de cada producto
            function actualizarTotal() {
            const cant = Number(cajitaCant.value);
            const totalCalculado = cant * item.price;
            total.textContent = `${totalCalculado.toFixed(2)}${data.currency}`;//Aqui le limito a 2 decimales para la estetica sino da demasiados decimales
            pro.textContent = item.title;//Parte de la derecha 
            price.textContent = `${totalCalculado.toFixed(2)}${data.currency}`;//Parte de la derecha
            carrito.actualizarUnidades(item.SKU, cant);
            actualizarTotalGeneral();

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
                carrito.actualizarUnidades(item.SKU, Number(cajitaCant.value));
            }
        });

        //Boton mas
        bMas.addEventListener('click',() => {
            cajitaCant.value++;
            bMenos.disabled = false;
            actualizarTotal();
            carrito.actualizarUnidades(item.SKU, Number(cajitaCant.value));
        });

        
        






    });

    //Creo la fila con el total de todos los precios 
    const finalT = document.createElement('tr'); 
    //La palabra total 
    const t = document.createElement('td'); 
    t.textContent = `TOTAL`; 
    finalT.append(t); 
    //El calculo de todo 
    allPrice = document.createElement('td'); 
    finalT.append(allPrice); 
    tablebodytotal.append(finalT); 






    });