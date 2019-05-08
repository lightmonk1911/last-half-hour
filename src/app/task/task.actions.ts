import { Action } from '@ngrx/store';
import { Task } from '../task/task.model';

export enum TaskActionTypes {
  MarkAsRemoved = '[Task] MarkAsRemoved',
  MarkAsDone = '[Task] MarkAsDone'
}

export class MarkAsRemoved implements Action {
  readonly type = TaskActionTypes.MarkAsRemoved;

  constructor(public payload: Task) {}
}

export class MarkAsDone implements Action {
  readonly type = TaskActionTypes.MarkAsDone;

  constructor(public payload: Task) {}
}

export type TaskActionsUnion = MarkAsRemoved | MarkAsDone;
