import { Component, inject, Input } from '@angular/core';
import { Iuser } from '../../interfaces/iuser.interface';
import { ApiServiceService } from '../../services/api-service.service';

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css',
})
export class UserCardComponent {

  userService = inject(ApiServiceService);
  @Input() miUser!: Iuser;


}
