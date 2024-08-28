import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    HeaderComponent
  ],
  templateUrl: './layout.component.html',
  styles: ``
})
export class LayoutComponent {}
