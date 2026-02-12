import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NinjaService } from '../../service/ninja.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { Ininja } from '../../interfaces/ininja.interface';

@Component({
  selector: 'app-ninja-form',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './ninja-form.component.html',
  styleUrl: './ninja-form.component.css',
})
export class NinjaFormComponent {

  ninjaForm: FormGroup;
  ninjaService = inject(NinjaService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  isNew: boolean;


  constructor() {
    this.isNew = true;

    this.ninjaForm = new FormGroup({
      affiliation: new FormControl(null, [Validators.required]),
      clan: new FormControl(null, [Validators.required]),
      fullname: new FormControl(null, [Validators.required]),
      gender: new FormControl(null, [Validators.required]),
      id: new FormControl(null, []),
      image1: new FormControl(null, [Validators.required]),
      image2: new FormControl(null, [Validators.required]),
      level: new FormControl(null, [Validators.required]),
      naturetype: new FormControl(null, [Validators.required]),
      ninjaname: new FormControl(null, [Validators.required]),
      stats: new FormGroup({
        genjutsu: new FormControl(null, [Validators.required, Validators.max(100)]),
        handseals: new FormControl(null, [Validators.required, Validators.max(100)]),
        id: new FormControl(null, []),
        intelligence: new FormControl(null, [Validators.required, Validators.max(100)]),
        ninjutsu: new FormControl(null, [Validators.required, Validators.max(100)]),
        speed: new FormControl(null, [Validators.required, Validators.max(100)]),
        stamina: new FormControl(null, [Validators.required, Validators.max(100)]),
        strength: new FormControl(null, [Validators.required, Validators.max(100)]),
        taijutsu: new FormControl(null, [Validators.required, Validators.max(100)])
      })
    });
  }


  async getDataForm() {
    let ninja = this.ninjaForm.value as Ininja;

    if (this.isNew) {
      const response = await this.ninjaService.insertNinja(ninja);
      if (response.id) {
        Swal.fire({
          title: "Ninja agregado correctamente",
          text: `Bienvenido ${response.ninjaname}`,
          icon: "success"
        });
      }
    } else {
      const response = await this.ninjaService.updateNinja(ninja);
      if (response.id) {
        Swal.fire({
          title: "Ninja actualizado correctamente",
          icon: "success"
        });
      }
    }

    this.ninjaForm.reset();
    this.router.navigate(['dashboard/ninjas']);
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async (params: any) => {
      let id: number = params.id;
      if (id) {
        let miNinja = await this.ninjaService.getNinjasById(id);
        if (miNinja) {
          this.isNew = false;
          this.ninjaForm.patchValue(miNinja);
        } else {
          alert("No se encuentra el ninja");
        }
      }
    });
  }




  //metodo para dar error si esta un campo mal puesto
  checkControl(formControlName: string, validator: string): boolean | undefined {
  return this.ninjaForm.get(formControlName)?.hasError(validator) && this.ninjaForm.get(formControlName)?.touched
  }



}
