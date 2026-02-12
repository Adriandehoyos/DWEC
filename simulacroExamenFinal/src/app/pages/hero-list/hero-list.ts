import { Component, inject } from '@angular/core';
import { Ihero } from '../../interfaces/ihero.interface';
import { HeroService } from '../../service/hero.service';
import { HeroCard } from '../../components/hero-card/hero-card';
import { ChangeDetectorRef } from '@angular/core'; //prueba para error en paginacion


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
  private cdr = inject(ChangeDetectorRef);//prueba para error en paginacion


  constructor(){
    this.heroesArray = [];
    this.currentpage = 0;
    this.totalpages = 3;
  }


       ngOnInit(): void{
        this.loadCharacters(0);
  }

loadCharacters(page: number): void {
  this.heroService.getAllHeroes(page).subscribe({
    next: (response) => {
      this.heroesArray = response.content;
      this.currentpage = response.number;
      this.totalpages = response.totalPages;
      this.cdr.detectChanges(); //prueba para error en paginacion
      console.log(this.heroesArray);
    },
    error: (err) => {
      console.error('Error al cargar personajes:', err);
    }
  });
}


    previousPage(): void {
    if (this.currentpage > 0) { // Spring empieza en 0
      this.loadCharacters(this.currentpage - 1);
    }
  }

  nextPage(): void {
    if (this.currentpage < this.totalpages -1) { // totalPages es el total, no el índice
      this.loadCharacters(this.currentpage + 1);
    }
  }

}
