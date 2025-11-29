import { ApiserviceService } from './../../service/apiservice.service';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Iproducto } from '../../interfaces/Iproducto.interfaces';

@Component({
  selector: 'app-formulario',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {

  productsForm: FormGroup;
  ApiserviceService = inject(ApiserviceService);

  constructor(){
    this.productsForm = new FormGroup({
      name: new FormControl(null,[Validators.required]),
      description: new FormControl(null,[Validators.required]),
      price: new FormControl(null,[Validators.required]),
      category: new FormControl(null,[Validators.required]),
      image: new FormControl(null,[Validators.required]),
      active: new FormControl(null,[Validators.required])
    },[])
  }

  getDataForm() {
  let producto = this.productsForm.value as Iproducto;
  this.ApiserviceService.insertProducto(producto);
  console.log(producto + "hola")
  this.productsForm.reset();

    }

}
