import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { apiUrl } from "@configs/api-url.config";
import { User } from "../interfaces/user.interface";

@Injectable({
    providedIn: 'root',
})
export class UserService {

    public _http = inject(HttpClient);

    constructor() {}

    saveUser(user: User)
    {
        const formData = new FormData();
        formData.append('profileImage', user.profileImage);
        formData.append('user', JSON.stringify(user));
        return this._http.post(apiUrl.user.addUser, formData)
    }
}