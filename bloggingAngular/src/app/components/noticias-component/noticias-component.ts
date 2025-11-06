import { Component } from '@angular/core';
import { NoticiaInterfaces } from '../../interfaces/noticia-interfaces';
import { dateTimestampProvider } from 'rxjs/internal/scheduler/dateTimestampProvider';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-noticias-component',
  imports: [DatePipe], //importo esto para poder mostrar la fecha de la manera que quiero en el html
  templateUrl: './noticias-component.html',
  styleUrl: './noticias-component.css',
})
export class NoticiasComponent {

  noticias: NoticiaInterfaces[];
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

}
