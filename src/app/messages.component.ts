import { Component } from '@angular/core';
import { WebService } from './web.service';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'messages',
    template: `
    <div *ngFor="let message of messages">
        <mat-card class="card">
            <mat-card-title>{{message.owner}}</mat-card-title>
            <mat-card-content>{{message.text}}</mat-card-content>
        </mat-card>
    </div>`
})

export class MessagesComponent {
    constructor(private webService : WebService) {}
    

    messages = [];
    async ngOnInit() {
        var response = await this.webService.getMessages();
        // this.messages = response.json();
        //no more json method in HttpClientModule
        this.messages = JSON.parse(JSON.stringify(response));

    }
}