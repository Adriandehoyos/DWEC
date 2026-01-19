import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { Hero } from '../interfaces/hero.interface';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
    private httpClient = inject(HttpClient);
    private baseUrl: string = 'http://localhost:8080/api';





    getAllUsers(): Promise<any>{
              const httpOptions = {
            headers: new HttpHeaders({
                'Content-type': 'application/json',
                'Authorization': localStorage.getItem("token") || ""
            })
        };
      return lastValueFrom(this.httpClient.get<any>(this.baseUrl + "/characters?page=0&size=1", httpOptions));
    }


    insertHero(hero: Hero): Promise<Hero>{
              const httpOptions = {
            headers: new HttpHeaders({
                'Content-type': 'application/json',
                'Authorization': localStorage.getItem("token") || ""
            })
        };
      return lastValueFrom(this.httpClient.post<Hero>(this.baseUrl + "/characters", hero, httpOptions));
    }


}
