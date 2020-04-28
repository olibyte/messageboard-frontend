import { Component, Output, EventEmitter } from '@angular/core';
import { WebService } from './web.service';

@Component({
    selector: 'new-message',
    template: `
    <mat-card class="card">
        <mat-card-content>
            <mat-form-field>
                <input [(ngModel)]="message.owner" matInput placeholder="Name">
            </mat-form-field>
            <mat-form-field>
                <textarea [(ngModel)]= "message.text" matInput placeholder="Message"></textarea>
            </mat-form-field>
            <mat-card-actions>
                <button (click)="post()" mat-button color="primary">POST</button>
            </mat-card-actions>
        </mat-card-content>
    </mat-card>
    `
})

export class NewMessageComponent {

    @Output() onposted = new EventEmitter();
    
    constructor(private webService: WebService) {}

    message = {
        owner: "",
        text: ""
    }
    post() {
        this.webService.postMessage(this.message);
    }
}