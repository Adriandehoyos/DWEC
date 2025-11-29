import { ApiserviceService } from './../../service/apiservice.service';
import { Iproducto } from './../../interfaces/Iproducto.interfaces';
import { Component, inject } from '@angular/core';
import { ProductCardComponent } from "../../components/product-card/product-card.component";

@Component({
  selector: 'app-productos',
  imports: [ProductCardComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css',
})
export class ProductosComponent {

  productos: Iproducto[];
  ApiserviceService = inject(ApiserviceService);

  constructor(){
    this.productos= [];
  }

  ngOnInit(){
    this.productos = this.ApiserviceService.getAllPro();
    console.log(this.productos);
  }


}
