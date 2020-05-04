import { Component, ViewChild } from '@angular/core';
import { MessagesComponent } from './messages.component';
import { NewMessageComponent } from './new-message.component';

@Component({
  selector: 'app-root',
  template: `
  <h1>Message Board</h1>
  <new-message (onPosted)="onPosted($event)"></new-message>
  <messages></messages>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild(MessagesComponent) messages : MessagesComponent;

  onPosted(message) {
    this.messages.messages.push(message);
  }
}
