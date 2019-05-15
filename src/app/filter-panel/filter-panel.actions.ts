import { Action } from '@ngrx/store';
import { FilterName } from '../filter-tasks-pipe/filter-tasks-pipe.filters';

export enum ActionTypes {
  EnableFilter = '[Filter Panel] Enable Filter',
  DisableFilter = '[Filter Panel] Disable Filter'
}

export class EnableFilter implements Action {
  readonly type = ActionTypes.EnableFilter;

  constructor(public payload: FilterName) {}
}

export class DisableFilter implements Action {
  readonly type = ActionTypes.DisableFilter;

  constructor(public payload: FilterName) {}
}
export type ActionsUnion = EnableFilter | DisableFilter;
