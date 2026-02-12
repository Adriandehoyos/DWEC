import { Component, inject, Input } from '@angular/core';
import { NinjaService } from '../../service/ninja.service';
import { Ininja } from '../../interfaces/ininja.interface';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ninja-card',
  imports: [RouterLink],
  templateUrl: './ninja-card.component.html',
  styleUrl: './ninja-card.component.css',
})
export class NinjaCardComponent {

  ninjaService = inject(NinjaService);
  @Input() miNinja!: Ininja;

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
          Swal.fire({
            title: "Eliminado",
            text: `Has eliminado a ${ninja.ninjaname}`,
            icon: "success"
          });
        }
      });

    }

}
