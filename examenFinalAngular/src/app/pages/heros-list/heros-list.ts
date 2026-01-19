import { Component, inject } from '@angular/core';
import { HeroService } from '../../service/hero.service';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-heros-list',
  imports: [],
  templateUrl: './heros-list.html',
  styleUrl: './heros-list.css',
})
export class HerosList {
  herosArray: Hero[];
  heroService = inject(HeroService);
    currentPage: number;

  constructor(){
    this.herosArray = [];
    this.currentPage = 1;
  }

    async ngOnInit(): Promise<void>{
      this.herosArray = await this.heroService.getAllUsers();
      console.log(this.herosArray);
  }




}
