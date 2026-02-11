import { Component, inject } from '@angular/core';
import { Ihero } from '../../interfaces/ihero.interface';
import { HeroService } from '../../service/hero.service';

@Component({
  selector: 'app-hero-list',
  imports: [],
  templateUrl: './hero-list.html',
  styleUrl: './hero-list.css',
})
export class HeroList {

  heroesArray: Ihero[];
  heroService = inject(HeroService);
  currentpage: number;

  constructor(){
    this.heroesArray = [];
    this.currentpage = 0;
  }


      async ngOnInit(): Promise<void>{
      this.heroesArray = await this.heroService.getAllHeroes();
      console.log(this.heroesArray);
  }

}
