import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HeroService } from '../../service/hero.service';
import { Hero } from '../../interfaces/hero.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heros-form',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './heros-form.html',
  styleUrl: './heros-form.css',
})
export class HerosForm {

  herosForm: FormGroup;
  heroService = inject(HeroService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  isNew: boolean;


  constructor(){
    this.isNew = true;
    this.herosForm = new FormGroup({
      id: new FormControl(null, []),
      heroName: new FormControl(null, [Validators.required]),
      fullName: new FormControl(null, [Validators.required]),
      image1: new FormControl(null, [Validators.required]),
      image2: new FormControl(null, [Validators.required]),
      image3: new FormControl(null, [Validators.required]),
      gender: new FormControl(null, [Validators.required]),
      race: new FormControl(null, [Validators.required]),
      alignment: new FormControl(null, [Validators.required])
    },[])
  }

    async getDataForm(){
    let hero = this.herosForm.value as Hero;
    //insertar uno nuevo
    if(this.isNew){
      const response = await this.heroService.insertHero(hero);
      if(response.id){
        Swal.fire({
        title: "Usuario agregado correctamente",
        text: `Bienvenido ${response.heroName}`,
        icon: "success"
      });
      }

    }
    //actualizarlo
    else{
      // const response = await this.heroService.updateUser(user);
      // if(response.id){
      //   Swal.fire({
      //   title: "Usuario actualizado correctamente",
      //   icon: "success"
      // });
      // console.log(user);
      // }
    }
    this.herosForm.reset();
    this.router.navigate(['home']);

  }

}
