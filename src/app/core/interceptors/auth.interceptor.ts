import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs';
import { AuthService } from '@core/services/auth.service';
import { Router } from '@angular/router';
import { TokenService } from '@core/services/token.service';

const TOKEN_HEADER_KEY = 'Authorization';
//Ne pas enlever l'espace sur le string 
const BEARER = 'Bearer ';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  
  const _authService    = inject(AuthService);
  const _tokenService   = inject(TokenService);
  const _router         = inject(Router);

  return next(req).pipe(
    tap({
      next: () => {
        let authReq = req;

        const token = _tokenService.getToken();

        _authService.isAuthenticated$.subscribe((auth) => {
            if(auth) {
                authReq = req.clone({
                    headers: req.headers.set(TOKEN_HEADER_KEY, BEARER + token),
                });
            } else {
                _router.navigateByUrl("auth/login");
            }
        });

        return authReq;
      }
      // ,
      // error: () => {},
      // complete: () => {},
    })
  );
};