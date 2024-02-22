import { NumberInput } from "@angular/cdk/coercion";
import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { FormBaseField, FormCheckboxField, FormDateField, FormSelectField, FormTextField } from "@core/models/form/fields";
import { FormServiceInterface } from "@core/models/form/form.service.interface";

@Injectable({
    providedIn: 'root',
})
export class UserFormService implements FormServiceInterface {

  getFormFields(): FormBaseField<string | number | boolean | NumberInput>[] {
    const form: FormBaseField<string | number | boolean | NumberInput>[] = [

        new FormTextField({
            key: 'firstName',
            label: 'Prénom',
            validations: {
              constraints : [
                Validators.required,
                Validators.maxLength(5)
              ],
              errorsMessages: {
                'required' : 'Le prénom est requis',
                'maxlength': 'Longueur maximale est de 5'
              },
            },  
            order: 1
        }),
        new FormTextField({
            key: 'lastName',
            label: 'Nom',
            validations: {
              constraints : [
                Validators.required,
                Validators.maxLength(5)
              ],
              errorsMessages: {
                'required' : 'Le nom est requis',
                'maxlength': 'Longueur maximale est de 5'
              },
            },  
            order: 2
        }),
        new FormTextField({
            key: 'username',
            label: "Nom d'utilisateur",
            validations: {
              constraints : [
                Validators.required,
                Validators.minLength(3),
                Validators.pattern(/^[A-Za-z0-9._-]{3,20}$/)
              ],
              errorsMessages: {
                'required' : 'Le nom d\'utilisateur est requis',
                'minlength': 'Longueur minimale est de 3',
                'pattern': 'Nom d\'utilisateur invalide'
              },
            },  
            order: 3
        }),
        new FormTextField({
            key: 'password',
            label: "Mot de passe",
            validations: {
              constraints : [
                Validators.required,
                Validators.maxLength(3)
              ],
              errorsMessages: {
                'required' : 'Le mot de passe est requis',
                'maxlength': 'Longueur maximale est de 3'
              },
            },  
            order: 3
        }),
        new FormTextField({
            key: 'school',
            label: "Ecole",
            // validations: {
            //   constraints : [
            //     Validators.required,
            //     Validators.maxLength(3)
            //   ],
            //   errorsMessages: {
            //     'required' : 'Le nom d\'utilisateur est requis',
            //     'maxlength': 'Longueur maximale est de 3'
            //   },
            // },  
            order: 4
        }),
        new FormTextField({
            key: 'level',
            label: "Niveau",
            // validations: {
            //   constraints : [
            //     Validators.required,
            //     Validators.maxLength(3)
            //   ],
            //   errorsMessages: {
            //     'required' : 'Le nom d\'utilisateur est requis',
            //     'maxlength': 'Longueur maximale est de 3'
            //   },
            // },  
            order: 5
        }),
        new FormSelectField({
            key: 'roles',
            label: 'Roles',
            options: [
              {key: 'Yes', value: 'YES'},
              {key: 'No', value: 'NO'}
            ],
            order: 6
        }),
        new FormCheckboxField({
            key: 'isActive',
            label: 'Status',
            options: [
              {key: 'Yes', value: 'YES'},
              {key: 'No', value: 'NO'}
            ],
            order: 7
        }),
        new FormDateField({
            key: 'dateOfBirth',
            label: 'Date de naissance',
            order: 4
        }),
    ];
    return form.sort((a, b) => a.order - b.order);
  }

  getFormGroup(): FormGroup {
    const group: any = {};
    this.getFormFields().forEach(field => {
      group[field.key] = new FormControl(field.value || '', field.validations.constraints)
    });
    return new FormGroup(group);
  }
}