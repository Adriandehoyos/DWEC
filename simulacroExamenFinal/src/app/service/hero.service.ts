import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Ihero } from '../interfaces/ihero.interface';
import { Ipages } from '../interfaces/ipages.interface';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  
  private httpClient = inject(HttpClient);
  private baseUrl: string = 'http://localhost:8080/api';

  //get con paginacion
    getAllHeroes(page: number = 0, size: number = 9): Promise<Ipages> {
      return lastValueFrom(this.httpClient.get<Ipages>(`${this.baseUrl}/characters?page=${page}&size=${size}`));
  }


}
