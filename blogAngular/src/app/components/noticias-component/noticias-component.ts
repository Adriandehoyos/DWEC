import { Component } from '@angular/core';
import { NoticiaInterfaces } from '../../interfaces/noticia-interfaces';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-noticias-component',
  imports:[DatePipe, FormsModule, CommonModule], //importo el datepipe para poder mostrar la fecha de la manera que quiero en el html, el formsModule para el formulario y el commonModule para usar el ngclass
  templateUrl: './noticias-component.html',
  styleUrl: './noticias-component.css',
})

export class NoticiasComponent {

  noticias: NoticiaInterfaces[] = [];

  constructor(){
    this.noticias = [{

      titulo: "PlayStation define cuál es su estrategia con PS6 y será totalmente diferente a lo visto hasta ahora",
      url: "https://fotografias-2.larazon.es/clipping/cmsimages01/2025/10/10/81EFE969-7B84-4C52-AB54-A9E71749C279/cerebro-detras-ps6-insinua-insinua-que-proxima-consola-sony-podria-estar-mas-cerca-que-parece_70.jpg?crop=1900,1069,x0,y0&width=480&height=270&optimize=low&format=webply",
      cuerpo: "Mark Cerny, arquitecto principal de las consolas PlayStation y una de las figuras más influyentes dentro del desarrollo de hardware en la industria, ha ofrecido una visión más clara sobre lo que podemos esperar de PS6. Según sus declaraciones, la próxima consola de Sony marcará un punto de inflexión en la estrategia tecnológica de la compañía: el objetivo ya no será aumentar de forma exponencial la potencia bruta, sino aprovechar mejor los recursos disponibles mediante ray tracing avanzado e inteligencia artificial aplicada al rendimiento y la jugabilidad.Cerny explicó que, en lugar de seguir la tendencia tradicional de medir el salto generacional en teraflops, resolución o tasa de cuadros por segundo, el enfoque estará en cómo estas capacidades se combinan con tecnologías inteligentes para ofrecer una experiencia visual más inmersiva y realista. El ray tracing —técnica que calcula con precisión el comportamiento de la luz— será el eje central del apartado gráfico, permitiendo recrear reflejos, sombras, refracciones y efectos lumínicos con un nivel de fidelidad sin precedentes, incluso en escenarios de mundo abierto.",
      fecha: new Date("10/11/2025"),
      expandido: false
    },
    {

      titulo: "Bitcoin bajo presión: ¿Es una advertencia para las acciones?",
      url: "https://cryptodnes.bg/es/wp-content/uploads/sites/14/2025/11/Bitcoin-bajo-presion.jpg",
      cuerpo: "Bitcoin cotiza cerca de los 100.000 dólares, tras una semana complicada donde tocó los 99.000 por primera vez desde junio. Para quien buscan las mejores criptomonedas para invertir, esta caída del 6% en siete días refleja presiones globales que también afectan a las acciones. Aquí van algunos puntos clave para entender si esto es una señal de alerta mayor. El precio actual de Bitcoin y su reciente caída. Bitcoin cayó por debajo de los 100.000 dólares a comienzos de la semana pasada y la corrección viene de un octubre flojo, el peor desde 2015, con el activo cayendo desde 106.000 y luego de haber alcanzado su ATH que superó los $120K. Sin embargo, hay que recordar que esto es normal dentro de la predicción de las criptomonedas: los precios suben y bajan rápido, pero un soporte en 100.000 dólares actúa como freno.",
      fecha: new Date("11/11/2025"),
      expandido: false
    }
  ]



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
      expandido: false
    });

    // Limpiar el formulario
    this.nuevaNoticia = { titulo: "", url: "", cuerpo: "", fecha: new Date() };

  }

  leerMas(noticia: any) {
  noticia.expandido = !noticia.expandido;
}




  }

