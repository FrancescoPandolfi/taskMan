import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { LayoutComponent } from './core/layout/layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DashboardComponent, LayoutComponent],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {

}
