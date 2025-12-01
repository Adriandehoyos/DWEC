import { ProductService } from './../../services/product.service';
import { Component, inject } from '@angular/core';
import { Iproduct } from '../../interfaces/iproduct.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vermas',
  imports: [],
  templateUrl: './vermas.component.html',
  styleUrl: './vermas.component.css',
})
export class VermasComponent {

  miProducto!: Iproduct;
  miServicio = inject(ProductService);
  activatedRoute = inject(ActivatedRoute);

        ngOnInit(): void {
        //suscripcion para coger el parametro de la url
        this.activatedRoute.params.subscribe((params: any) => {
            // recoger el parametro
            let miId: string = params.id;
            if (miId != undefined) {
                // Pedir al servicio el producto
                let response = this.miServicio.getById(miId);
                if (response != undefined) {
                    // Rellenar mi propiedad miServicio
                    this.miProducto = response;
                }
            }
        });
    }



}
