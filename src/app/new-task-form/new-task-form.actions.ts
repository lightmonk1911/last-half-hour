import { Action } from '@ngrx/store';
import { Task } from '../task/task.model';

export enum ActionTypes {
  CreateTask = '[New Task Form] Create Task'
}

export class CreateTask implements Action {
  readonly type = ActionTypes.CreateTask;

  constructor(public payload: Task) {}
}

export type ActionsUnion = CreateTask;
