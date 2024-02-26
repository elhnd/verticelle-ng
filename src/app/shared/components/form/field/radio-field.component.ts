import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseFieldModule } from './base-field.module';
import { MatRadioModule } from '@angular/material/radio';
import { BaseFieldComponent } from './base-field.component';

@Component({
  standalone: true,
  selector: 'app-radio',
  template: `
    <mat-radio-group 
      [formGroup]="form"
      [id]="field.key"
      [formControlName]="field.key"
      [attr.aria-label]="field.label">
      @if (field.options) {
        @for (option of field.options; track option) {
          <mat-radio-button [value]="option.key">{{ option.value }}</mat-radio-button>
        }
      }
    </mat-radio-group>
  `,
  imports: [ 
    BaseFieldModule,
    MatRadioModule
  ],
  styleUrl: 'field.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RadioFieldComponent extends BaseFieldComponent<any> {}