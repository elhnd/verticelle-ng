import { FormGroup } from '@angular/forms';
import { FormBaseField } from './fields';
import { NumberInput } from '@angular/cdk/coercion';
import { Observable } from 'rxjs';

export interface FormServiceInterface {

  getFormFields(): Observable<FormBaseField<any>[]>;

  getFormGroup(): FormGroup;

}