import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthenticationFormService } from '@features/authentication/services/authentication-form.service';
import { DynamicFieldComponent } from '@shared/components/form/dynamic-field.component';
import { AuthService } from '@core/services/auth.service';
import { RoleService } from '@core/services/role.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    RouterModule,
    DynamicFieldComponent
  ],
  providers: [AuthenticationFormService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  private _authService      = inject(AuthService);
  private _authFormService  = inject(AuthenticationFormService);
  private _router           = inject(Router);
  private _roleService      = inject(RoleService);

  fields  = toSignal(this._authFormService.getFormFields());
  form    = toSignal(this._authFormService.getFormGroup(), { initialValue: new FormGroup({}) });

  connexion () {    
    this._authService.login(this.form().getRawValue())
    .subscribe( () => { 
      if(this._roleService.isUser()) {
        this._router.navigateByUrl('app/registration')
      }
    });
  }

}
