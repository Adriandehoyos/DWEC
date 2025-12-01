import { RolesService } from './../../services/roles.service';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, FormsModule],//importo formsmodule para poder usar el ngmodel para cambiar de rol
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
 rolesService = inject(RolesService);
}
