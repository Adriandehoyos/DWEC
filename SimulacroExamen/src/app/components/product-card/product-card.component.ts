import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Iproducto } from '../../interfaces/Iproducto.interfaces';
import { RouterLink } from "@angular/router";
import { ApiserviceService } from '../../service/apiservice.service';
import { RolesService } from '../../service/roles.service';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {

  productsService = inject(ApiserviceService)
  rolesServices = inject(RolesService);
  @Input() miProducto!: Iproducto;
  @Output() eliminar = new EventEmitter<number>();//output para eliminar en el filtrado


  deletePro(producto: Iproducto){
    this.productsService.deleteById(producto.id);
    this.eliminar.emit(this.miProducto.id);
  }


}
