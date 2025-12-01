import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from './../../services/product.service';
import { Component, inject } from '@angular/core';
import { Iproduct } from '../../interfaces/iproduct.interface';
import { ActivatedRoute, Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-product-form',
  imports: [ReactiveFormsModule,],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css',
})
export class ProductFormComponent {

  productsForm: FormGroup;
  ProductService = inject(ProductService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

    isNew: boolean;


  constructor(){
    this.isNew = true;
    this.productsForm = new FormGroup({
      id: new FormControl(null,[]),
      name: new FormControl(null,[Validators.required, Validators.minLength(3)]),
      description: new FormControl(null,[Validators.required]),
      price: new FormControl(null,[Validators.required]),
      category: new FormControl(null,[Validators.required]),
      image: new FormControl(null,[Validators.required]),
      active: new FormControl(null,[Validators.required])
    },[])
  }

  getDataForm() {
  let producto = this.productsForm.value as Iproduct;
  if(this.isNew){
  this.ProductService.insertProducto(producto);
  }else{
    this.ProductService.updatePro(producto);
    console.log(producto);
  }

  this.productsForm.reset();
  this.router.navigate(['products'])

    }

      ngOnInit(): void {
      this.activatedRoute.params.subscribe((params: any) => {
          let id: string = params.id;
          if (id != undefined) {
              //Pedir al servicio la serie por id
              let miPro = this.ProductService.getById(id);
              if (miPro != undefined) {
                  this.isNew = false;
                  this.productsForm = new FormGroup({
                    id: new FormControl(miPro.id,[]),
                    name: new FormControl(miPro.name,[Validators.required, Validators.minLength(3)]),
                    description: new FormControl(miPro.description,[Validators.required]),
                    price: new FormControl(miPro.price,[Validators.required]),
                    category: new FormControl(miPro.category,[Validators.required]),
                    image: new FormControl(miPro.image,[Validators.required]),
                    active: new FormControl(miPro.active,[Validators.required])
                  },[])
              } else {
                  alert("No se encuantra el producto en nuestro servicio");
              }
          }
      });
  }

  checkControl(formControlName: string, validator: string): boolean | undefined {
  return this.productsForm.get(formControlName)?.hasError(validator) && this.productsForm.get(formControlName)?.touched
  }
}


