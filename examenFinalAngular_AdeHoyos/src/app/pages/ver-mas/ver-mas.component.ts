import { Component, inject } from '@angular/core';
import { NinjaService } from '../../service/ninja.service';
import { Ininja } from '../../interfaces/ininja.interface';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ver-mas',
  imports: [RouterLink],
  templateUrl: './ver-mas.component.html',
  styleUrl: './ver-mas.component.css',
})
export class VerMasComponent {

    activatedRoute = inject(ActivatedRoute);
    ninjaService = inject(NinjaService);
    private router = inject(Router);
    miNinja!: Ininja;


    ngOnInit(): void {
      //suscripcion para coger el parametro de la url
      this.activatedRoute.params.subscribe(async (params: any) => {
          // recoger el parametro
          let miId: number = params.id;
          if (miId != undefined) {
              // Pedir al servicio el user
              let response = await this.ninjaService.getNinjasById(miId);
              if (response != undefined) {
                  // Rellenar mi propiedad miUser
                  this.miNinja = response;

              }
          }
      });
  }


          async deleteNinja(ninja: Ininja) {

        await Swal.fire({
          title: `Quieres eliminar a ${ninja.ninjaname}?`,
          text: "No vas a poder restablecerlo",
          icon: "warning",
          showCancelButton: true,
          cancelButtonText: "Cancelar",
          confirmButtonColor: "#d33",
          cancelButtonColor: "#3085d6",
          confirmButtonText: "Eliminar"
        }).then((result) => {

          if (result.isConfirmed) {
          this.ninjaService.deleteNinja(ninja.id!);
            this.router.navigate(['/dashboard/ninjas'])
            Swal.fire({
              title: "Eliminado",
              text: `Has eliminado a ${ninja.ninjaname}`,
              icon: "success"
            });
          }
        });

      }


}
