import { Component, inject } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { IconsDirective } from '../../../../shared/icons.directive';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    FaIconComponent,
  ],
  template: `
    <header class="bg-neutral text-neutral-content w-full p-2 px-8 flex items-center rounded-lg">

      <label class="btn btn-circle btn-sm swap swap-rotate drawer-button md:hidden mr-3" for="my-drawer">
        <input type="checkbox"/><fa-icon [icon]="faBars"></fa-icon>
      </label>

      <div class="text-lg mr-auto">Hi, {{name}}</div>

      <button (click)="headerService.createTask()" class="btn btn-sm mr-4"><fa-icon [icon]="faPlus"></fa-icon>Create</button>

      <div class="avatar">
        <div class="w-12 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"/>
        </div>
      </div>

    </header>
  `
})
export class HeaderComponent extends IconsDirective {
  name = 'Francesco';
  headerService = inject(HeaderService);
}
