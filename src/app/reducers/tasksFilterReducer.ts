import { Action } from '@ngrx/store';
import { FilterName } from '../tasks-filter/tasks-filter.filters';
import { ActionTypes, ActionsUnion } from '../filter-panel/filter-panel.actions';

export function tasksFiltersReducer(state = [], action: ActionsUnion): Array<FilterName> {
  switch (action.type) {
    case ActionTypes.DisableFilter: {
      return state.filter(filterName => filterName !== action.payload);
    }
    case ActionTypes.EnableFilter: {
      return state.concat(action.payload);
    }
    default: {
      return state;
    }
  }
}
