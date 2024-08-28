import { Component, viewChild } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { IconsDirective } from '../../../../shared/icons.directive';
import { TaskModalComponent } from '../../../../features/dashboard/components/task-modal/task-modal.component';
import { SwapThemeComponent } from '../../../../shared/UI/swap-theme/swap-theme.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    FaIconComponent,
    TaskModalComponent,
    SwapThemeComponent
  ],
  template: `
    <header class="text-neutral-content w-full flex items-center rounded-lg">

      <label class="btn btn-circle btn-sm swap swap-rotate drawer-button md:hidden mr-3" for="my-drawer">
        <input type="checkbox"/>
        <fa-icon [icon]="faBars"></fa-icon>
      </label>

      <div class="text-neutral-500 text-lg mr-auto">Hi, {{ name }}</div>

      <button (click)="createTask()" class="btn btn-primary btn-sm mr-4">
        <fa-icon [icon]="faPlus"></fa-icon>
        Create
      </button>

      <div class="mr-4">
        <app-swap-theme></app-swap-theme>
      </div>

      <div class="avatar">
        <div class="w-12 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"/>
        </div>
      </div>

      <app-task-modal [scope]="'CREATE'" [task]="null"></app-task-modal>


    </header>
  `
})
export class HeaderComponent extends IconsDirective {
  name = 'Francesco';
  taskModalComponent = viewChild(TaskModalComponent);

  createTask() {
    this.taskModalComponent()?.resetForm()
    this.taskModalComponent()?.openModal()
  }
}
