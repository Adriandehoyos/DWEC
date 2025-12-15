import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiInterface } from '../interfaces/api-interface.interface';
import { Iuser } from '../interfaces/iuser.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {

  //!!!! MUY IMPORTANTE AÑADIR LA LINEA provideHttpClient() EN APP.CONFIG SINO DA FALLO !!!!!!

    private baseUrl: string = 'https://peticiones.online/api/users';
    httpClient = inject(HttpClient);

    constructor(){}

    //en el get cojo el objeto entero pero luego en el componente tengo que igualarlo a un response.results para solo coger el array de usuarios
    getAllUsers(): Observable<ApiInterface>{
      return this.httpClient.get<ApiInterface>(this.baseUrl);
    }



}
