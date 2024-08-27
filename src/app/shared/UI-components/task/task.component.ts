import { Component, input, InputSignal, Signal } from '@angular/core';
import { Task } from '../../models';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styles: ``
})
export class TaskComponent {
  tasks: InputSignal<Task[]> = input.required<Task[]>();
}
