import { Component, inject } from '@angular/core';
import { Ihero } from '../../interfaces/ihero.interface';
import { HeroService } from '../../service/hero.service';
import { HeroCard } from '../../components/hero-card/hero-card';

@Component({
  selector: 'app-hero-list',
  imports: [HeroCard],
  templateUrl: './hero-list.html',
  styleUrl: './hero-list.css',
})
export class HeroList {

  heroesArray: Ihero[];
  heroService = inject(HeroService);
  currentpage: number;
  totalpages: number;

  constructor(){
    this.heroesArray = [];
    this.currentpage = 0;
    this.totalpages = 1;
  }


      async ngOnInit(): Promise<void>{
        this.loadCharacters(this.currentpage);
  }

    async loadCharacters(page: number): Promise<void> {
    try {
      // GET /api/characters?page=0&size=9
      const response = await this.heroService.getAllHeroes(page, 9);
      this.heroesArray = response.content; // Spring devuelve los datos en 'content'
      this.currentpage = response.number;       // Spring devuelve la página actual en 'number'
      this.totalpages = response.totalPages;
      console.log(this.heroesArray);
    } catch (error) {
      console.error('Error al cargar personajes:', error);
    }
  }

    previousPage(): void {
    if (this.currentpage > 0) { // Spring empieza en 0
      this.loadCharacters(this.currentpage - 1);
    }
  }

  nextPage(): void {
    if (this.currentpage < this.totalpages - 1) { // totalPages es el total, no el índice
      this.loadCharacters(this.currentpage + 1);
    }
  }

}
