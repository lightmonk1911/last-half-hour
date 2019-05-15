import { Action } from '@ngrx/store';

export enum ActivitiesActionTypes {
  CreateActivity = '[Activities] create activity'
}

export class CreateActivity implements Action {
  readonly type = ActivitiesActionTypes.CreateActivity;
  constructor(public payload: { taskId: string; start: Date }) {}
}

export type ActivitiesActionUnion = CreateActivity;
