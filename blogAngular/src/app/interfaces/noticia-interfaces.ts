export interface NoticiaInterfaces {
      titulo: string,
      url: string,
      cuerpo: string,
      fecha: Date
      expandido?: boolean; // propiedad opcional para controlar el "Leer más"
}
