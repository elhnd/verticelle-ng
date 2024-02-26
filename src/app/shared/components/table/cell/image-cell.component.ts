import {ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseCellComponent } from './base-cell.component';

@Component({
  standalone: true,
  selector: 'app-image-cell',
  template: `
    <img [src]="" class="image" />
  `,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: `
    .image {
      width:50px;
      height:auto;
    }
  `
})
export class ImageCellComponent extends BaseCellComponent {}