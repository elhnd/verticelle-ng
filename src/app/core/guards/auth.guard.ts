import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TokenService } from '@core/services/token.service';


export const authGuard = () => {

    const router           = inject(Router);
    const snackBar         = inject(MatSnackBar);
    const tokenService     = inject(TokenService);
    console.log("test guard");
    console.log(tokenService.isTokenExpired());
    if(tokenService.isTokenExpired()) {
        console.log("test guard");
        
        snackBar.open(
            'Your session has expired. Please log in again.',
            '❌'
        );
        router.navigateByUrl('auth/login');

        return false;
    } 

    return true;
}