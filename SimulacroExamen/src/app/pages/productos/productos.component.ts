import { ApiserviceService } from './../../service/apiservice.service';
import { Iproducto } from './../../interfaces/Iproducto.interfaces';
import { Component, inject } from '@angular/core';
import { ProductCardComponent } from "../../components/product-card/product-card.component";
import { ProFilterComponent } from "../../components/pro-filter/pro-filter.component";

@Component({
  selector: 'app-productos',
  imports: [ProductCardComponent, ProFilterComponent],
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


  getcategory($event: string){
    this.productos = this.ApiserviceService.getProductByCategory($event);
  }

  //delete para que se borre tambien al filtrar
  deleteProduct(id: number) {
    this.ApiserviceService.deleteById(id);
    this.productos = this.productos.filter(p => p.id !== id);
  }

}
