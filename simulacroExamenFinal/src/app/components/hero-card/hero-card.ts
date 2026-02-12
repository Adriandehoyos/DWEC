import { Component, inject, Input } from '@angular/core';
import { HeroService } from '../../service/hero.service';
import { Ihero } from '../../interfaces/ihero.interface';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-hero-card',
  imports: [RouterLink],
  templateUrl: './hero-card.html',
  styleUrl: './hero-card.css',
})
export class HeroCard {

  heroService = inject(HeroService);
  @Input() miHero!: Ihero;


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
