import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiServiceService } from '../../services/api-service.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Iuser } from '../../interfaces/iuser.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {

  userForm: FormGroup;
  apiService = inject(ApiServiceService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  isNew: boolean;

  constructor(){
    this.isNew = true;
    this.userForm = new FormGroup({
      _id: new FormControl(null, []),
      id: new FormControl(null, []),
      first_name: new FormControl(null, [Validators.required]),
      last_name: new FormControl(null, [Validators.required]),
      username: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      image: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    },[])
  }

  async getDataForm(){
    let user = this.userForm.value as Iuser;
    //insertar uno nuevo
    if(this.isNew){
      const response = await this.apiService.insertUser(user);
      if(response.id){
        Swal.fire({
        title: "Usuario agregado correctamente",
        text: `Bienvenido ${response.username}`,
        icon: "success"
      });
      }

    }
    //actualizarlo
    else{
      const response = await this.apiService.updateUser(user);
      if(response.id){
        Swal.fire({
        title: "Usuario actualizado correctamente",
        icon: "success"
      });
      console.log(user);
      }
    }
    this.userForm.reset();
    this.router.navigate(['home']);

  }


}
