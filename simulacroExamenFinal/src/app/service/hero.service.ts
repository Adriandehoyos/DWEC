import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { Ihero } from '../interfaces/ihero.interface';
import { Ipages } from '../interfaces/ipages.interface';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  
  private httpClient = inject(HttpClient);
  private baseUrl: string = 'http://localhost:8080/api/characters';
  private baseUrlPower: string = 'http://localhost:8080/api/powerstats';

  //get con paginacion
  getAllHeroes(page: number = 0, size: number = 3) {
    return this.httpClient.get<Ipages>(
      `${this.baseUrl}?page=${page}&size=${size}`
    );
  }

     //get hero por id
    getHeroById(id: number): Promise<Ihero>{
      return lastValueFrom(this.httpClient.get<Ihero>(`${this.baseUrl}/${id}`))
    }

//     getHeroById(id: number): Observable<Ihero> {
//   return this.httpClient.get<Ihero>(`${this.baseUrl}/${id}`);
// }


  //post
  insertHero(hero: Ihero): Promise<Ihero>{
    return lastValueFrom(this.httpClient.post<Ihero>(this.baseUrl, hero));
  }

  //delete
    deleteById(id: number): Promise<Ihero>{
    return lastValueFrom(this.httpClient.delete<Ihero>(`${this.baseUrl}/${id}`))
  }


      //actualizar un heroe
    updateHero(hero: Ihero): Promise<Ihero> {
      return lastValueFrom(this.httpClient.put<Ihero>(`${this.baseUrl}/${hero.id}`, hero));
    }
}
