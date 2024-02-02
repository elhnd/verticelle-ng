import { Routes } from '@angular/router';
import { LoginLayoutComponent } from './layout/login-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout.component';
import { AuthService } from '@core/services/auth.service';
import { AuthGuard } from '@core/guards/auth.guard';
import { GameLayoutComponent } from '@layout/game-layout.component';

export const routes: Routes = [
    {
        path:'auth', 
        component: LoginLayoutComponent,
        children: [
            { 
                path: 'login',
                loadComponent: () => import('./features/authentication/components/login/login.component').then( c => c.LoginComponent)
            }
        ] 
    },
    { 
        path: 'admin',
        component: AdminLayoutComponent,
        // canActivate: [() => AuthGuard()],
        // canActivateChild: [() => AuthGuard()],
        // children: [
        //     {
        //         path: 'dashboard',
        //     },
        //     {
        //         path:'**', redirectTo: 'dashboard', pathMatch: 'full'
        //     }
        // ]
    },
    { 
        path: 'game',
        component: GameLayoutComponent,
        // canActivate: [() => AuthGuard()],
        // canActivateChild: [() => AuthGuard()],
        // children: [
        //     {
        //         path: 'dashboard',
        //     },
        //     {
        //         path:'**', redirectTo: 'dashboard', pathMatch: 'full'
        //     }
        // ]
    }
];
