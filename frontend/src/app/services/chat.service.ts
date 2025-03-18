import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private apiUrl = 'https://talk-about-backend.onrender.com/api/chat';

  constructor(private http: HttpClient) { }

  sendMessage(pergunta: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/send_message`, { pergunta });
  }

  getHistory(): Observable<any> {
    return this.http.get(`${this.apiUrl}/history`);
  }
}
