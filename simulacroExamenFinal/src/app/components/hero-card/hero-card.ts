import { Component, inject, Input } from '@angular/core';
import { HeroService } from '../../service/hero.service';
import { Ihero } from '../../interfaces/ihero.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero-card',
  imports: [RouterLink],
  templateUrl: './hero-card.html',
  styleUrl: './hero-card.css',
})
export class HeroCard {

  heroService = inject(HeroService);
  @Input() miHero!: Ihero;




}
