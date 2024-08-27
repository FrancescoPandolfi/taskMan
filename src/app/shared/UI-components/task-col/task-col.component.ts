import { Component, input } from '@angular/core';

@Component({
  selector: 'app-task-col',
  standalone: true,
  imports: [],
  templateUrl: './task-col.component.html',
  styles: ``
})
export class TaskColComponent {

  title = input('');
  totTasks = input(0);


}
