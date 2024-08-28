import { Component, effect, ElementRef, inject, input, OnInit, viewChild } from '@angular/core';
import { Task, TaskStatus } from '../../../core/models';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';

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
  form: FormGroup;
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
      console.log(task);
      if (task) {
        this.form.patchValue(task);
      }
    });
  }


  openModal() {
    this.modal()?.nativeElement.showModal();
  }

  resetForm() {
    this.form.reset();
  }
}
