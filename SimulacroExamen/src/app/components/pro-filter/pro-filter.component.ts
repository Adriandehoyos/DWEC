import { Component, EventEmitter, inject, Output } from '@angular/core';
import { ApiserviceService } from '../../service/apiservice.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pro-filter',
  imports: [FormsModule],
  templateUrl: './pro-filter.component.html',
  styleUrl: './pro-filter.component.css',
})
export class ProFilterComponent {

  filterForm: any;
  productsService = inject(ApiserviceService);
  categorias: string[] = [];

  @Output() categoriaSelecionada: EventEmitter<string> = new EventEmitter();


  ngOnInit(){
    this.categorias = this.productsService.getAllCategory();
  }

  getDataFilter(form: any){
    this.categoriaSelecionada.emit(form.value.categoria);
  }
}
