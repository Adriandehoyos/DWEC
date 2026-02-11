import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Auth } from '../interfaces/auth.interface';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
        private httpClient = inject(HttpClient);
    private baseUrl: string = 'http://localhost:8080/api/';

    constructor() { }

    login(user: Auth): Promise<any> {
      return lastValueFrom(this.httpClient.post<any>(this.baseUrl + "login", user));
    }
}
