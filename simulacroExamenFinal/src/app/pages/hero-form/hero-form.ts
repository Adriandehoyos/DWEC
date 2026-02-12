import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HeroService } from '../../service/hero.service';
import Swal from 'sweetalert2';
import { Ihero } from '../../interfaces/ihero.interface';

@Component({
  selector: 'app-hero-form',
  imports: [[ReactiveFormsModule, RouterLink]],
  templateUrl: './hero-form.html',
  styleUrl: './hero-form.css',
})
export class HeroForm {

  heroForm: FormGroup;
  heroService = inject(HeroService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  isNew: boolean;

  constructor() {
    this.isNew = true;

    this.heroForm = new FormGroup({
      id: new FormControl(null, []),
      heroname: new FormControl(null, [Validators.required]),
      fullname: new FormControl(null, [Validators.required]),
      image1: new FormControl(null, [Validators.required]),
      image2: new FormControl(null, [Validators.required]),
      image3: new FormControl(null, [Validators.required]),
      gender: new FormControl(null, [Validators.required]),
      race: new FormControl(null, [Validators.required]),
      alignment: new FormControl(null, [Validators.required]),
      powerstats: new FormGroup({ //Esto tambien se puede hacer de una manera mas simple sin el new formgroup y en el html serian mas campos sin mas
        id: new FormControl(null, []),
        intelligence: new FormControl(null, [Validators.required]),
        strength: new FormControl(null, [Validators.required]),
        speed: new FormControl(null, [Validators.required]),
        durability: new FormControl(null, [Validators.required]),
        power: new FormControl(null, [Validators.required]),
        combat: new FormControl(null, [Validators.required])
      })
    });
  }

  
  async getDataForm() {
    let hero = this.heroForm.value as Ihero;

    if (this.isNew) {
      const response = await this.heroService.insertHero(hero);
      if (response.id) {
        Swal.fire({
          title: "Héroe agregado correctamente",
          text: `Bienvenido ${response.heroname}`,
          icon: "success"
        });
      }
    } else {
      const response = await this.heroService.updateHero(hero);
      if (response.id) {
        Swal.fire({
          title: "Héroe actualizado correctamente",
          icon: "success"
        });
      }
    }

    this.heroForm.reset();
    this.router.navigate(['heroes']);
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async (params: any) => {
      let id: number = params.id;
      if (id) {
        let miHero = await this.heroService.getHeroById(id);
        if (miHero) {
          this.isNew = false;
          this.heroForm.patchValue(miHero);
        } else {
          alert("No se encuentra el héroe");
        }
      }
    });
  }

  //   ngOnInit(): void{
  //   this.activatedRoute.params.subscribe(async(params:any) =>{
  //     let _id: string = params._id;
  //     if(_id != undefined){
  //       let miUser = await this.apiService.getUserById(_id);
  //       if(miUser != undefined){
  //         this.isNew = false;
  //         this.userForm = new FormGroup({
  //           _id: new FormControl(miUser._id, []),
  //           id: new FormControl(miUser.id, []),
  //           first_name: new FormControl(miUser.first_name, [Validators.required]),
  //           last_name: new FormControl(miUser.last_name, [Validators.required]),
  //           username: new FormControl(miUser.username, [Validators.required]),
  //           email: new FormControl(miUser.email, [Validators.required]),
  //           image: new FormControl(miUser.image, [Validators.required]),
  //           password: new FormControl(miUser.password, [Validators.required])
  //         },[])
  //       }else{
  //         alert("No se encuentra el user")
  //       }
  //     }
  //   })
  // }

}
