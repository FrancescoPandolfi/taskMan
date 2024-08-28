import { inject, Injectable } from '@angular/core';
import { TaskService } from '../../../../features/dashboard/services/task.service';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  api = inject(TaskService);

  createTask() {
    console.log('Create task');
  }
}
