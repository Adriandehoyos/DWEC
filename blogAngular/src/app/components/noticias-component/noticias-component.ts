import { Component } from '@angular/core';
import { NoticiaInterfaces } from '../../interfaces/noticia-interfaces';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-noticias-component',
  imports:[DatePipe, FormsModule], //importo esto para poder mostrar la fecha de la manera que quiero en el html
  templateUrl: './noticias-component.html',
  styleUrl: './noticias-component.css',
})

export class NoticiasComponent {

  noticias: NoticiaInterfaces[] = [];
  nNoticia: number;

  constructor(){
    this.nNoticia = 0;
    this.noticias = [{

      titulo: "Noticia1",
      url: "https://placehold.co/600x400",
      cuerpo: "noticia de prueba 1",
      fecha: new Date("12/12/2025")
    }]



  }

  nuevaNoticia: NoticiaInterfaces = {
      titulo: "",
      url: "",
      cuerpo: "",
      fecha: new Date()
  }

   agregarNoticia() {
    this.noticias.push({
      titulo: this.nuevaNoticia.titulo,
      cuerpo: this.nuevaNoticia.cuerpo,
      fecha: this.nuevaNoticia.fecha,
      url: this.nuevaNoticia.url,
    });

    // Limpiar el formulario
    this.nuevaNoticia = { titulo: "", url: "", cuerpo: "", fecha: new Date() };
    }
}
