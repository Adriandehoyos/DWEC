import { ChangeDetectorRef, Component, inject, Input } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HeroService } from '../../service/hero.service';
import { Ihero } from '../../interfaces/ihero.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ver-mas',
  imports: [RouterLink],
  templateUrl: './ver-mas.html',
  styleUrl: './ver-mas.css',
})
export class VerMas {

    activatedRoute = inject(ActivatedRoute);
    heroService = inject(HeroService);
    miHero!: Ihero;
  private cdr = inject(ChangeDetectorRef);

            ngOnInit(): void {
        //suscripcion para coger el parametro de la url
        this.activatedRoute.params.subscribe(async (params: any) => {
            // recoger el parametro
            let miId: number = params.id;
            if (miId != undefined) {
                // Pedir al servicio el user
                let response = await this.heroService.getHeroById(miId);
                if (response != undefined) {
                    // Rellenar mi propiedad miUser
                    this.miHero = response;
                          this.cdr.detectChanges();//parche para que no me cargue la pagina vacia igual que en el hero list
                    
                }
            }
        });
    }



        async deleteHero(hero: Ihero) {

      await Swal.fire({
        title: `Quieres eliminar a ${hero.heroname}?`,
        text: "No vas a poder restablecerlo",
        icon: "warning",
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Eliminar"
      }).then((result) => {

        if (result.isConfirmed) {
        this.heroService.deleteById(hero.id!);
          Swal.fire({
            title: "Eliminado",
            text: `Has eliminado a ${hero.heroname}`,
            icon: "success"
          });
        }
      });
    }

}
