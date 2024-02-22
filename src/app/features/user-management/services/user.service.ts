import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class UserService {

    public _http = inject(HttpClient);

    constructor() {}
}