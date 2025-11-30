import { Component, inject, Input } from '@angular/core';
import { Iproducto } from '../../interfaces/Iproducto.interfaces';
import { RouterLink } from "@angular/router";
import { ApiserviceService } from '../../service/apiservice.service';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {

  productsService = inject(ApiserviceService)
  @Input() miProducto!: Iproducto;


  deletePro(producto: Iproducto){
    this.productsService.deleteById(producto.id);
  }


}
