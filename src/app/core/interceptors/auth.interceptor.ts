import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { TokenService } from "@core/services/token.service";

export const authInterceptor : HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) =>{

    const tokenService = inject(TokenService);
    
    if(!tokenService.isTokenExpired()){
        inject(Router).navigateByUrl("auth/login");
        return next(req);
    }

    const reqWithHeader = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${tokenService.getToken()}`),
    });
        
    return next(reqWithHeader);  
}