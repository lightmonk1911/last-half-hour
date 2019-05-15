import { ActionTypes, ActionsUnion } from '../filter-panel/filter-panel.actions';
import { FilterName } from '../filter-tasks-pipe/filter-tasks-pipe.filters';

export function tasksFiltersReducer(
  state = ['notRemoved', 'notDone'],
  action: ActionsUnion
): Array<FilterName> {
  switch (action.type) {
    case ActionTypes.DisableFilter: {
      return state.filter((filterName) => filterName !== action.payload);
    }
    case ActionTypes.EnableFilter: {
      return state.concat(action.payload);
    }
    default: {
      return state;
    }
  }
}
