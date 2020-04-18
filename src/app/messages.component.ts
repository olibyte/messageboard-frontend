import { Component } from '@angular/core';
import { WebService } from './web.service';

@Component ({
    // tslint:disable-next-line: component-selector
    selector: 'messages',
    template: `
    <div *ngFor="let message of messages">
        <mat-card style="margin:8px">
            <mat-card-title>{{message.owner}}</mat-card-title>
            <mat-card-content>{{message.text}}</mat-card-content>
        </mat-card>
    </div>`
})

export class MessagesComponent {
    constructor(private webService: WebService) {}

    async ngOnInit() {
        var response = await this.webService.getMessages();
        this.messages = response;
    }

    messages : Object = [];
}