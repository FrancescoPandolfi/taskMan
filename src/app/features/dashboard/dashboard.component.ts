import { Component, computed, effect, inject, OnInit, signal } from '@angular/core';
import { TaskService } from './services/task.service';
import { JsonPipe } from '@angular/common';
import { TaskComponent } from './components/task/task.component';
import { TaskColComponent } from './components/task-col/task-col.component';
import { CdkDropList } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    JsonPipe,
    TaskComponent,
    TaskColComponent,
    CdkDropList
  ],
  templateUrl: './dashboard.component.html',
  styles: ``
})
export class DashboardComponent implements OnInit {
  taskService = inject(TaskService);
  ngOnInit(): void {
    this.taskService.getTasks().subscribe();
  }
}
