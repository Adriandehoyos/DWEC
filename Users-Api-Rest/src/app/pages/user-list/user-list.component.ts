import { Component, inject } from '@angular/core';
import { Iuser } from '../../interfaces/iuser.interface';
import { ApiServiceService } from '../../services/api-service.service';
import { UserCardComponent } from "../../components/user-card/user-card.component";

@Component({
  selector: 'app-user-list',
  imports: [UserCardComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent {

  usersArray: Iuser[];
  usersService = inject(ApiServiceService);

  constructor(){
    this.usersArray = [];
  }

  ngOnInit(): void{
    this.usersService.getAllUsers().subscribe(response=>{
      this.usersArray = response.results;//con esta linea solo cojo el array de usuarios
      console.log(this.usersArray);
    })
  }

  //elimino del array para que sea mas visual ya que no hay back
  deleteUser(_id: string){
    this.usersArray = this.usersArray.filter(u => u._id !== _id);
  }

}
