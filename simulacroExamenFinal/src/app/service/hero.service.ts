import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Ihero } from '../interfaces/ihero.interface';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  
  private httpClient = inject(HttpClient);
  private baseUrl: string = 'http://localhost:8080/api';

  //revisar este metodo 
    getAllHeroes(): Promise<Ihero[]> {
      return lastValueFrom(this.httpClient.get<Ihero[]>(this.baseUrl + "/characters?page=0&size=9"));
  }


}
