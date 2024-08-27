import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { ETaskStatus, StatusColumn, Task } from '../../shared/models';
import { JsonPipe } from '@angular/common';
import { TaskComponent } from '../../shared/UI-components/task/task.component';
import { TaskColComponent } from '../../shared/UI-components/task-col/task-col.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    JsonPipe,
    TaskComponent,
    TaskColComponent
  ],
  templateUrl: './dashboard.component.html',
  styles: ``
})
export class DashboardComponent implements OnInit {

  statusColumns: StatusColumn[] = [
    { id: ETaskStatus.todo, title: 'To Do', tasks: signal([]) },
    { id: ETaskStatus.inProgress, title: 'In Progress', tasks: signal([]) },
    { id: ETaskStatus.done, title: 'Done', tasks: signal([]) }
  ];
  loading = signal(false);
  private api = inject(ApiService);

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    this.loading.set(true);
    this.api.getTasks().subscribe({
      next: (tasks) => {
        this.statusColumns.forEach((column) => {
          column.tasks.set(tasks.filter((task) => task.status === column.id));
        });
        console.log(tasks);
      },
      complete: () => this.loading.set(false)
    });
  }


}
