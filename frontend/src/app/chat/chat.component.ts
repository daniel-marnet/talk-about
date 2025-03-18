import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';
//../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  mensagem: string = '';
  historico: any[] = [];

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.chatService.getHistory().subscribe(res => {
      this.historico = res.history;
    });
  }

  enviarMensagem() {
    this.chatService.sendMessage(this.mensagem).subscribe(res => {
      this.historico.push({ pergunta: this.mensagem, resposta: res.answer });
      this.mensagem = '';
    });
  }
}
