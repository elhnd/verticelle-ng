import { Injectable, inject } from '@angular/core';
import { TokenService } from './token.service';
import { Roles } from '@core/models/roles.enum';

@Injectable({
  providedIn: 'root',
})
export class RoleService {

    private _tokenService   = inject(TokenService);

    allRoles(): string[] {
        return this._tokenService.getDecodeToken()?.roles || [];
    }

    isAdministrator(): boolean {        
        return this.allRoles().includes(Roles.ADMINISTRATOR);
    }

    isUser(): boolean {
        return this.allRoles().includes(Roles.USER);
    }

    isApprenant(): boolean {
        return this.allRoles().includes(Roles.APPRENANT);
    }
}