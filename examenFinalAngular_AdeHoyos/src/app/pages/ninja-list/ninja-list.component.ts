import { Component, inject } from '@angular/core';
import { Ininja } from '../../interfaces/ininja.interface';
import { NinjaService } from '../../service/ninja.service';
import { NinjaCardComponent } from "../../components/ninja-card/ninja-card.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ninja-list',
  imports: [NinjaCardComponent, FormsModule],
  templateUrl: './ninja-list.component.html',
  styleUrl: './ninja-list.component.css',
})
export class NinjaListComponent {
  ninjaArray: Ininja[];
  ninjaService = inject(NinjaService);
  // Propiedades para la paginación
  currentPage: number;
  totalPages: number; //el numero total de paginas

  constructor(){
    this.ninjaArray = [];
    this.currentPage = 0;
    this.totalPages = 6; //se que son 6 ya que he mirado en el postan el totalpages
  }


    ngOnInit(): void{
    this.loadNinjas(this.currentPage);
  }


  async loadNinjas(page: number): Promise<void> {
    try {
      const response = await this.ninjaService.getAllNinjas(page);
      this.ninjaArray = response.content;
      this.currentPage = response.number;
      this.totalPages = response.totalPages;
      console.log(this.ninjaArray);
    } catch (error) {
      console.error('Error al cargar los ninjas:', error);
    }
  }





      previousPage(): void {
    if (this.currentPage > 0) { // Spring empieza en 0
      this.loadNinjas(this.currentPage - 1);
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages -1) { // totalPages es el total, no el índice
      this.loadNinjas(this.currentPage + 1);
    }
  }


}
