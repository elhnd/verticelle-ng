import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from '@shared/components/header/header.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet,MatGridListModule, MatSidenavModule, MatButtonModule, HeaderComponent],
  template: `
    <app-header></app-header>
    <div style="padding: 20px;">
      <router-outlet ></router-outlet>
    </div>
  `,
  styles: ''
})
export class AppLayoutComponent  {

}
