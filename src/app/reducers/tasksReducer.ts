import { Task } from '../task/task.model';
import {
  ActionTypes as NewTaskFormActionTypes,
  ActionsUnion as NewTaskFormActionsUnion
} from '../new-task-form/new-task-form.actions';
import { TaskActionsUnion, TaskActionTypes } from '../task/task.actions';

type ActionsUnion = NewTaskFormActionsUnion | TaskActionsUnion;

export function taskReducer(state = [], action: ActionsUnion): Array<Task> {
  switch (action.type) {
    case NewTaskFormActionTypes.CreateTask: {
      return [...state, action.payload];
    }
    case TaskActionTypes.UpdateTask: {
      const newState = state.filter(({ id }) => action.payload.id !== id).concat(action.payload);
      return newState;
    }
    default: {
      return state;
    }
  }
}
