import { Component, DestroyRef, Input, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormBaseField } from '@core/models/form/fields';
import { UserFormService } from '@features/user-management/services/user-form.service';
import { UserService } from '@features/user-management/services/user.service';
import { DynamicFieldComponent } from '@shared/components/form/dynamic-field.component';

@Component({
  selector: 'app-user-registration',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    DynamicFieldComponent
  ],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css'
})
export class UserRegistrationComponent {

  @Input() id!: number;
  formFields  : FormBaseField<any>[];
  form!       : FormGroup;

  private _userFormService  = inject(UserFormService);
  private _userService      = inject(UserService);
  private _destroyRef       = inject(DestroyRef);


  constructor(){
    this.formFields = this._userFormService.getFormFields();
  }

  ngOnInit(): void {
    this.form = this._userFormService.getFormGroup();

    if(this.id) {
      //this.getDeviance();
    }
  }

}
