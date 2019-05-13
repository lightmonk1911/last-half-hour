import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { Task } from '../task/task.model';
import { Activity } from '../activity/activity.model';
import { taskReducer } from './tasksReducer';
import { activityReducer } from './activities';
import { localStorageSync } from 'ngrx-store-localstorage';
import { tasksFiltersReducer } from './tasksFilterReducer';
import { ITasksFilter, FilterName } from '../tasks-filter/tasks-filter.filters';

export interface State {
  tasks: Array<Task>;
  activities: Array<Activity>;
  tasksFilters: Array<FilterName>;
}

export const reducers: ActionReducerMap<State> = {
  tasks: taskReducer,
  activities: activityReducer,
  tasksFilters: tasksFiltersReducer
};

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    const newState = reducer(state, action);
    console.log('action', action);
    console.log('state was', state, 'became', newState);
    return newState;
  };
}

const LSSyncReducer = localStorageSync({ keys: ['tasks', 'activities'], rehydrate: true });

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [LSSyncReducer, debug]
  : [LSSyncReducer];
