import { RolesService } from './../../services/roles.service';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Iproduct } from '../../interfaces/iproduct.interface';
import { Router, RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {

    producService = inject(ProductService);
    @Input() miProducto!: Iproduct;
    @Output() eliminar = new EventEmitter<string>();//output para eliminar en el filtrado
    RolesService = inject(RolesService);//meto roles para que solo el admin pueda eliminar, sino el user le sale deshabilitado
    router = inject(Router);


    deletePro(producto: Iproduct){
      this.producService.deleteById(producto.id);
      this.eliminar.emit(this.miProducto.id);//emit para eliminar tambien filtrando
    }

    actualizar(producto: Iproduct){
      this.router.navigate(['/form', producto.id]);
    }
}
