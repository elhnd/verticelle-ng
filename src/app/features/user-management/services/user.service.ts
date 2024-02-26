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

    saveUser(user: User, files: FileList)
    {
        const formData = new FormData();

        if (files && files.length > 0) {
            formData.append('profileImage', files[0]);
        }
      
        Object.keys(user).forEach(key => {
            let value = user[key as keyof User];
            if (typeof value === 'boolean') {
                value = JSON.stringify(value);
            }
            formData.append(key, value);
        });
            
        return this._http.post(apiUrl.user.addUser, formData)
    }
}