import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  messages = [
    {id: 1, text: `You are now friends with John` },
    {id: 2, text: `John liked your tweet` },
    {id: 3, text: `You'll never believe what John said...` }
  ];

  update(id, text){
    this.messages = this.messages.map(
      m => m.id === id ? {id, text} : m
    );
  }

  constructor() { }

}
