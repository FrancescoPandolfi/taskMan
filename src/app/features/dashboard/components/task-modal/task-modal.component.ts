import { Component, effect, ElementRef, inject, input, viewChild } from '@angular/core';
import { Task, TaskStatus } from '../../../../core/models';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-modal',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './task-modal.component.html',
  styles: ``
})
export class TaskModalComponent {

  modal = viewChild<ElementRef<HTMLDialogElement>>('createTaskModal');
  task = input<Task | null>(null);
  scope = input<'EDIT' | 'CREATE'>('CREATE');
  form: FormGroup;
  taskService = inject(TaskService);
  protected readonly TaskStatus = TaskStatus;
  private fb = inject(FormBuilder);

  constructor() {
    this.form = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      status: ['todo', [Validators.required]]
    });

    effect(() => {
      const task = this.task();
      if (task) {
        this.form.patchValue(task);
      }
    });
  }

  openModal() {
    this.modal()?.nativeElement.showModal();
  }

  saveTask() {
    if (this.scope() === 'EDIT') {
      this.taskService.updateTask(this.form.value, this.task()?.id!).subscribe({
        next: () => {this.taskService.getTasks().subscribe();}
      });
    } else {
      this.taskService.createTask(this.form.value).subscribe({
        next: () => {this.taskService.getTasks().subscribe();}
      });
    }
  }

  resetForm() {
    this.form.reset({
      title: '',
      description: '',
      status: 'todo'
    });
  }

}
