import { Component, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { ApiserviceService } from '../../service/apiservice.service';
import { RolesService } from '../../service/roles.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, FormsModule], //import para que cambie de rol con ngModel
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {

  rolesService = inject(RolesService);



}
