import { Action } from '@ngrx/store';
import { Activity } from '../activity/activity.model';


export function activityReducer(
  state = [],
  action: Action
): Array<Activity> {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
