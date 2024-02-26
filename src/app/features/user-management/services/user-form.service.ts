import { NumberInput } from "@angular/cdk/coercion";
import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { FormBaseField, FormCheckboxField, FormDateField, FormFileField, FormImageField, FormSelectField, FormTextField } from "@core/models/form/fields";
import { FormServiceInterface } from "@core/models/form/form.service.interface";
import { Observable, map, of } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class UserFormService {
    private form: FormBaseField<string | number | boolean | NumberInput>[] = [

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
              {key: 'Administrateur', value: 'ROLE_ADMINISTRATOR'},
              {key: 'Utilisateur', value: 'ROLE_USER'}
            ],
            order: 6
        }),
        new FormCheckboxField({
            key: 'isActive',
            label: 'Status',
            order: 7
        }),
        new FormDateField({
            key: 'dateOfBirth',
            label: 'Date de naissance',
            order: 4
        }),
        new FormFileField({
            key: 'profileImage',
            label: 'Image de profile'
        })
    ];

    getFormFields(): Observable<FormBaseField<string | number | boolean | NumberInput>[]> {
        return of(this.form.sort((a, b) => a.order - b.order));
    }

    getFormGroup(): Observable<FormGroup> {
        const group: {[key:string]: FormControl} = {};
        this.form.forEach(field => {
            group[field.key] = new FormControl(field.value || '', field.validations.constraints)
        });
        return of(new FormGroup(group));
    }
}