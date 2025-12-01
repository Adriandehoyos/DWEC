import { Component, EventEmitter, inject, Output, output } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter-form',
  imports: [FormsModule],
  templateUrl: './filter-form.component.html',
  styleUrl: './filter-form.component.css',
})
export class FilterFormComponent {
  filterFormC: any;
  filterFormA: any;
  productService = inject(ProductService);
  categorias: string[];

  @Output() categoriaSelect: EventEmitter<string> = new EventEmitter();

  constructor(){
    this.categorias = [];
  }

  ngOnInit(){
    this.categorias = this.productService.getAllCategory();
  }

  getDataFilterCategory(form: any){
    this.categoriaSelect.emit(form.value.categoria);
  }



}
