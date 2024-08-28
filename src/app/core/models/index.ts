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

export const TaskStatus = [
  {
    id: ETaskStatus.todo,
    title: 'To Do'
  },
  {
    id: ETaskStatus.inProgress,
    title: 'In Progress'
  },
  {
    id: ETaskStatus.done,
    title: 'Done'
  }
];

export interface StatusColumn {
  id: ETaskStatus;
  title: string;
  tasks: WritableSignal<Task[]>
}
