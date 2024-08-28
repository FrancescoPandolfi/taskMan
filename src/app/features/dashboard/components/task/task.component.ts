import { Component, inject, input, InputSignal, viewChild } from '@angular/core';
import { Task } from '../../../../core/models';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { IconsDirective } from '../../../../shared/icons.directive';
import { TaskModalComponent } from '../../../../shared/UI/task-modal/task-modal.component';
import { ConfirmModalComponent } from '../../../../shared/UI/confirm-modal/confirm-modal.component';
import { TaskService } from '../../services/task.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    FaIconComponent,
    TaskModalComponent,
    ConfirmModalComponent,
    NgClass
  ],
  templateUrl: './task.component.html',
  styles: ``
})
export class TaskComponent extends IconsDirective {
  tasks: InputSignal<Task[]> = input.required<Task[]>();
  taskModalComponent = viewChild(TaskModalComponent);
  confirmModalComponent = viewChild(ConfirmModalComponent);
  taskService = inject(TaskService);
  selectedTask: Task | null = null;

  editTask() {

  }

  deleteTask() {
    if (this.selectedTask) {
      this.taskService.deleteTask(this.selectedTask?.id).subscribe({
        next: () => {this.taskService.getTasks().subscribe();}
      });
    }
  }
}
