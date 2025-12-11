import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiIterface } from '../interfaces/api-iterface.interface';
import { Iuser } from '../interfaces/iuser.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
    private baseUrl: string = 'https://peticiones.online/api/users';
    httpClient = inject(HttpClient);

    constructor(){}

    getAllUsers(): Observable<Iuser[]>{
      return this.httpClient.get<Iuser[]>(this.baseUrl);
    }



}
