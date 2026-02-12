import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Ipages } from '../interfaces/ipages.interface';
import { Ininja } from '../interfaces/ininja.interface';

@Injectable({
  providedIn: 'root',
})
export class NinjaService {
    private httpClient = inject(HttpClient);
    private baseUrl: string = 'http://localhost:8080/api/ninjas';

    //get con paginacion
    //Quiero que las paginas vengan de 9 en 9 los ninjas
    getAllNinjas(page: number = 0, size: number = 9): Promise<Ipages>{
      return lastValueFrom(this.httpClient.get<Ipages>(`${this.baseUrl}?page=${page}&size=${size}`));
    }

    //get ninjas por id
    getNinjasById(id: number): Promise<Ininja>{
      return lastValueFrom(this.httpClient.get<Ininja>(`${this.baseUrl}/${id}`))
    }

    //post
    insertNinja(ninja: Ininja): Promise<Ininja>{
      return lastValueFrom(this.httpClient.post<Ininja>(this.baseUrl, ninja));
    }

    //delete
    deleteNinja(id: number): Promise<Ininja>{
      return lastValueFrom(this.httpClient.delete<Ininja>(`${this.baseUrl}/${id}`));
    }

    //update
    updateNinja(ninja: Ininja): Promise<Ininja>{
      return lastValueFrom(this.httpClient.put<Ininja>(this.baseUrl, ninja));
    }


    //get por nombre
    getPorNombre(name: string): Promise<Ininja[]>{
      return lastValueFrom(this.httpClient.get<Ininja[]>(`${this.baseUrl}/name/${name}`))
    }

}
