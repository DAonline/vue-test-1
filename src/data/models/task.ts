// types.ts

// Enum to define the task states
export enum TaskState {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE'
}

// Interface to define the structure of a Task
export interface Task {
  id: number;
  title: string;
  description: string;
  state: TaskState;
  createdAt: Date;
}
