import { WritableSignal } from '@angular/core';

export interface Task {
  id: string;
  title: string;
  description: string;
  status: ETaskStatus;
}

export enum ETaskStatus {
  todo = 'todo',
  inProgress = 'inProgress',
  done = 'done'
}

export const TaskStatus = {
  todo: 'To Do',
  inProgress: 'In Progress',
  done: 'Done'
};

export interface StatusColumn {
  id: ETaskStatus;
  title: string;
  tasks: WritableSignal<Task[]>
}
