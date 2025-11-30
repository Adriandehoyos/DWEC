import { Component, inject } from '@angular/core';
import { Iproducto } from '../../interfaces/Iproducto.interfaces';
import { ApiserviceService } from '../../service/apiservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vermas',
  imports: [],
  templateUrl: './vermas.component.html',
  styleUrl: './vermas.component.css',
})
export class VermasComponent {

  miProducto!: Iproducto;
  miServicio = inject(ApiserviceService);
  activatedRoute = inject(ActivatedRoute);

      ngOnInit(): void {
        //suscripcion para coger el parametro de la url
        this.activatedRoute.params.subscribe((params: any) => {
            // recoger el parametro
            console.log('PARAMS:', params);
            let id: number = Number(params['id']); //lo pongo de esta manera ya que sino lo recoge como un string y da fallo de la otra manera seria asi params.id; 
             console.log('ID CONVERTIDO:', id);  
            if (id != undefined) {
                // Pedir al servicio el producto
                let response = this.miServicio.getById(id);
                console.log('PRODUCTO:', this.miProducto);  
                if (response != undefined) {
                    // Rellenar mi propiedad miServicio
                    this.miProducto = response;
                }
            }
        });
    }


}
