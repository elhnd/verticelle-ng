import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { FormBaseField, FormTextField } from "@core/models/form/fields";
import { FormPasswordField } from "@core/models/form/fields/form-password.field";
import { FormServiceInterface } from "@core/models/form/form.service.interface";
import { Observable, of } from "rxjs";

@Injectable()
export class AuthenticationFormService {

    private form: FormBaseField<string>[] = [
        new FormTextField({
            key: 'username',
            label: 'Username',
            validations: {
                constraints: [
                    Validators.required
                ],
                errorsMessages: {
                    'required': 'Username is required',
                }
            }
        }),
        new FormPasswordField({
            key: 'password',
            label: 'Password',
            validations: {
                constraints: [
                    Validators.required,
                    Validators.minLength(8),
                    Validators.pattern('(?=.*d)(?=.*[a-z])(?=.*[A-Z])'),
                ],
                errorsMessages: {
                    'required': 'Password is required',
                    'minlength': 'Minimum 8 caracters is required',
                    'pattern': 'Pasword must contain at last ....',
                }
            }
        })
    ];

    getFormFields(): Observable<FormBaseField<string>[]> {
        return of(this.form.sort((a, b) => a.order - b.order));
    }

    getFormGroup(): Observable<FormGroup<any>> {
        const group: any = {};
        this.form.forEach(field => {
            group[field.key] = new FormControl(field.value || '', field.validations.constraints)
        });
        return of(new FormGroup(group));
    }
}