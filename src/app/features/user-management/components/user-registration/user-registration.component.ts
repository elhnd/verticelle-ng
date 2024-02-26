import { Component, DestroyRef, Input, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UserFormService } from '@features/user-management/services/user-form.service';
import { UserService } from '@features/user-management/services/user.service';
import { DynamicFieldComponent } from '@shared/components/form/dynamic-field.component';
import { response } from 'express';

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
  files!: FileList;
  private _userFormService  = inject(UserFormService);
  private _userService      = inject(UserService);
  private _destroyRef       = inject(DestroyRef);

  formFields  = toSignal(this._userFormService.getFormFields());
  form        = toSignal(this._userFormService.getFormGroup(), {initialValue: new FormGroup({})});

  ngOnInit(): void {
    if(this.id) {
      //this.getDeviance(); 
    }
  }

  getFiles(files: FileList) {
    this.files = files;
  }

  saveUser(){
    console.log(this.form().getRawValue(), this.files);
    this._userService.saveUser(this.form().getRawValue(), this.files)
    .subscribe((response)=>{console.log(response);
    })
  }

}
