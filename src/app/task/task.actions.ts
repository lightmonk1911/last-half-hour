import { Action } from '@ngrx/store';
import { Task } from '../task/task.model';

export enum TaskActionTypes {
  UpdateTask = '[Task] Update Task'
}

export class UpdateTask implements Action {
  readonly type = TaskActionTypes.UpdateTask;

  constructor(public payload: Task) {}
}

export type TaskActionsUnion = UpdateTask;
