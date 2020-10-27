
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()

export class SignInService {
    constructor(private http: HttpClient) {}

    sendPost(value) {
        const url = 'http://localhost:3000/signin';
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        // Content-Type vaf application/json trong postman phần headers
        const body = JSON.stringify(value);
        //stringify: đổi javacript object thành json
        return this.http.post(url, body, { headers, responseType: 'json'})
        .toPromise()
        // .then((res:any) => res.json());
        //không cần .then((res:any) => res.json()); vì đã có responseType: 'json'

    }
}


