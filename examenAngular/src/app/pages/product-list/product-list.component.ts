import { ProductService } from './../../services/product.service';
import { Component, inject } from '@angular/core';
import { Iproduct } from '../../interfaces/iproduct.interface';
import { ProductCardComponent } from "../../components/product-card/product-card.component";
import { FilterFormComponent } from "../../components/filter-form/filter-form.component";
import { RolesService } from '../../services/roles.service';

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent, FilterFormComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {

  productos: Iproduct[];
  ProductService = inject(ProductService);
  roles = inject(RolesService);

  constructor(){
    this.productos = [];
  }

  ngOnInit(): void{
    this.productos = this.ProductService.getAllPro();
    console.log(this.productos);
  }

  getcategory($event: string) {
    this.productos = this.ProductService.getByCategory($event);
}


  //delete para que se borre tambien al filtrar
  deleteProduct(id: string) {
    this.ProductService.deleteById(id);
    this.productos = this.productos.filter(p => p.id !== id);
  }

}
