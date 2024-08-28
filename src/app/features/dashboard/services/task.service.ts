import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, Observable, tap } from 'rxjs';
import { ETaskStatus, StatusColumn, Task } from '../../../core/models';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private API_URL = 'https://66cdbf3f8ca9aa6c8ccb776d.mockapi.io/api/';

  statusColumns: StatusColumn[] = [
    { id: ETaskStatus.todo, title: 'To Do', tasks: signal([]) },
    { id: ETaskStatus.inProgress, title: 'In Progress', tasks: signal([]) },
    { id: ETaskStatus.done, title: 'Done', tasks: signal([]) }
  ];
  loading = signal(false);
  http = inject(HttpClient);

  getTasks(): Observable<Task[]> {
    this.loading.set(true);
    return this.http.get<any>(this.API_URL + 'task').pipe(
      delay(1000),
      tap((tasks) => {
        this.statusColumns.forEach((column) => {
          column.tasks.set(tasks.filter((task: any) => task.status === column.id));
        });
        this.loading.set(false);
      })
    );
  }

  createTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.API_URL + 'task', task);
  }

  updateTask(task: Task, taskId: string): Observable<Task> {
    return this.http.put<Task>(this.API_URL + `task/${taskId}`, task);
  }

  deleteTask(id: string): Observable<Task> {
    return this.http.delete<Task>(this.API_URL + `task/${id}`);
  }
}
