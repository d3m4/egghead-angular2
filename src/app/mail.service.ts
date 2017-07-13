import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  messages = [
    'You are now friends with John',
    'John liked your tweet',
    "You'll never believe what John said..."
  ];

  message = "You've got mail!";
  message2 = "You've got mail!!!";

  constructor() { }

}
