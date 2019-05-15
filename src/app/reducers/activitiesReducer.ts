import { Activity } from '../activity/activity.model';
import { ActivitiesActionTypes, ActivitiesActionUnion } from '../activities/activities.actions';

export function activityReducer(state = [], action: ActivitiesActionUnion): Array<Activity> {
  switch (action.type) {
    case ActivitiesActionTypes.CreateActivity: {
      return [...state, action.payload];
    }
    default: {
      return state;
    }
  }
}
