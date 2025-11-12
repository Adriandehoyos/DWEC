import { NoticiasServices } from './../../services/noticias.services';
import { Component, inject } from '@angular/core';
import { NoticiaInterfaces } from '../../interfaces/noticia-interfaces';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-noticias-component',
  imports:[DatePipe, FormsModule, CommonModule], //importo el datepipe para poder mostrar la fecha de la manera que quiero en el html, el formsModule para el formulario y el commonModule para usar el ngclass
  templateUrl: './noticias-component.html',
  styleUrl: './noticias-component.css',
})

export class NoticiasComponent {

  noticias: NoticiaInterfaces[];
  NoticiasServices = inject(NoticiasServices);

  constructor(){
      this.noticias = [];
  }

    ngOnInit(): void {
        this.noticias = this.NoticiasServices.getAllNoticias();//Cuando se inicia la pagina traigo los datos que cree en el services
    }

  agregarNoticia(noticiaForm: NgForm) {
    let noticia: NoticiaInterfaces = noticiaForm.value as NoticiaInterfaces;
    this.noticias.push(noticia);

    // Limpiar el formulario
    noticiaForm.reset();

  }

  leerMas(noticia: any) {
  noticia.expandido = !noticia.expandido;
}




  }

