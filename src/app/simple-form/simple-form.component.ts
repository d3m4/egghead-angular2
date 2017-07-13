import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    {{message}}<br>
    <input #myInput type="text">
    <button (click)="onClick($event, myInput.value)">Click me!</button><br>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {

  @Input() message;

  onClick(event, value){
    console.log(event);
    console.log(value);
  }

  constructor() { }

  ngOnInit() {
  }

}
