import { Component, inject } from '@angular/core';
import { Iuser } from '../../interfaces/iuser.interface';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../../services/api-service.service';

@Component({
  selector: 'app-ver-mas',
  imports: [],
  templateUrl: './ver-mas.component.html',
  styleUrl: './ver-mas.component.css',
})
export class VerMasComponent {

  miUser!: Iuser;
  activatedRoute = inject(ActivatedRoute);
  userService = inject(ApiServiceService);

        ngOnInit(): void {
        //suscripcion para coger el parametro de la url
        this.activatedRoute.params.subscribe(async (params: any) => {
            // recoger el parametro
            let miId: string = params._id;
            if (miId != undefined) {
                // Pedir al servicio el user
                let response = await this.userService.getUserById(miId);
                if (response != undefined) {
                    // Rellenar mi propiedad miUser
                    this.miUser = response;
                }
            }
        });
    }
  }
