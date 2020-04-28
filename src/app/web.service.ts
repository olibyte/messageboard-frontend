import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WebService {

    BASE_URL = 'http://localhost:63145/api'

    constructor(private http: HttpClient) {}

    getMessages() {
        return this.http.get(this.BASE_URL + '/messages').toPromise();
    }

    postMessage(message) {
        return this.http.get(this.BASE_URL + '/messages', message).toPromise();
    }
}