import { Component, inject, viewChild } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { IconsDirective } from '../../../../shared/icons.directive';
import { HeaderService } from './header.service';
import { TaskStatus } from '../../../models';
import { TaskModalComponent } from '../../../../shared/UI/task-modal/task-modal.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    FaIconComponent,
    TaskModalComponent
  ],
  template: `
    <header class="text-neutral-content w-full flex items-center rounded-lg">

      <label class="btn btn-circle btn-sm swap swap-rotate drawer-button md:hidden mr-3" for="my-drawer">
        <input type="checkbox"/>
        <fa-icon [icon]="faBars"></fa-icon>
      </label>

      <div class="text-neutral-500 text-lg mr-auto">Hi, {{ name }}</div>

      <button class="btn btn-primary btn-sm mr-4" (click)="taskModalComponent()?.openModal()">
        <fa-icon [icon]="faPlus"></fa-icon>
        Create
      </button>

      <div class="avatar">
        <div class="w-12 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"/>
        </div>
      </div>

      <app-task-modal></app-task-modal>


    </header>
  `
})
export class HeaderComponent extends IconsDirective {
  name = 'Francesco';
  taskModalComponent = viewChild(TaskModalComponent);
}
