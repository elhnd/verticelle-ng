import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthenticationFormService } from '@features/authentication/services/authentication-form.service';
import { DynamicFieldComponent } from '@shared/components/form/dynamic-field.component';
import { FormBaseField } from '@core/models/form/fields';
import { AuthService } from '@core/services/auth.service';
import { RoleService } from '@core/services/role.service';

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
export class LoginComponent implements OnInit {

  form!   : FormGroup;
  fields! : FormBaseField<string>[];

  private _authService                = inject(AuthService);
  private _authFormService            = inject(AuthenticationFormService);
  private _router                     = inject(Router);
  private _roleService                = inject(RoleService);

  constructor() {
    this.fields = this._authFormService.getFormFields();
  }

  ngOnInit(): void {
    this.form = this._authFormService.getFormGroup();
  }

  connexion () {    
    this._authService.login(this.form.getRawValue())
    .subscribe( () => { 
      if(this._roleService.isUser()) {
        this._router.navigateByUrl('app/registration')
      }
    });
  }

}
