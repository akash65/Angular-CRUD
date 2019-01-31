import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class HttpService implements OnInit {
    constructor(private http: HttpClient) {}

    ngOnInit() {}

    get(url: string, params?: any) {
        return this.http.get(url, params);
    }
}
