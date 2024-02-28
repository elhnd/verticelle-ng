import { Routes } from '@angular/router';
import { LoginLayoutComponent } from './layout/login-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout.component';
import { authGuard } from '@core/guards/auth.guard';
import { AppLayoutComponent } from '@layout/app-layout.component';

export const routes: Routes = [
    {
        path:'auth', 
        component: LoginLayoutComponent,
        children: [
            { 
                path: 'login',
                loadComponent: () => import('./features/authentication/components/login/login.component').then(c => c.LoginComponent)
            },
            { 
                path: 'reset-password',
                loadComponent: () => import('./features/authentication/components/reset-password/reset-password.component').then(c => c.ResetPasswordComponent)
            }
        ] 
    },
    { 
        path: 'admin',
        component: AdminLayoutComponent,
        canActivateChild: [() => authGuard()],
        children: [
            {
                path: 'dashboard',
                loadComponent: () => import('./features/dashboard/components/admin-dashboard/admin-dashboard.component').then(c => c.AdminDashboardComponent)
            },
            {
                path: 'user-list',
                loadComponent: () => import('./features/user-management/components/user-list/user-list.component').then(c => c.UserListComponent)
            },
            {
                path:'**', redirectTo: 'dashboard', pathMatch: 'full'
            }
        ]
    },
    { 
        path: 'app',
        component: AppLayoutComponent,
        // canActivate: [() => authGuard()],
        canActivateChild: [() => authGuard()],
        children: [
            {
                path: 'registration',
                loadComponent: () => import('./features/user-management/components/user-registration/user-registration.component').then(c => c.UserRegistrationComponent)
            },
            {
                path: 'dashboard',
                loadComponent: () => import('./features/dashboard/components/user-dashboard/user-dashboard.component').then(c => c.UserDashboardComponent)
            },
            {
                path: 'user-profile',
                loadChildren: () => import('./features/user-management/components/user-profile/user-profile.component').then(c => c.UserProfileComponent)
            },
            {
                path:'**', redirectTo: 'dashboard', pathMatch: 'full'
            }
        ]
    }
];
