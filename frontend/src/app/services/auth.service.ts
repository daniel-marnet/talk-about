import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://talk-about-backend.onrender.com/api';

  constructor(private http: HttpClient) { }

  login(usuario: string, senha: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { usuario, senha });
  }
}
