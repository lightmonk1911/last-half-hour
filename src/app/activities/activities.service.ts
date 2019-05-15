import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Task } from '../task/task.model';
import { ActivitiesActionTypes } from './activities.actions';
import { Activity } from '../activity/activity.model';
import { Observable, of, interval } from 'rxjs';
import { map, takeLast } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  counter = interval(1000);
  prepared$: Observable<Array<IPreparedActivity>>;
  currentTaskId$: Observable<string>;

  constructor(private store: Store<{ activities: Array<Activity>; tasks: Array<Task> }>) {
    this.prepared$ = this.store
      .select(({ tasks, activities }) => ({ tasks, activities }))
      .pipe(map(({ tasks, activities }) => this.prepareActivities(activities, tasks)));
    this.currentTaskId$ = this.prepared$.pipe(map(([activity]) => activity.task.id));
  }

  createActivity(taskId: string) {
    this.store.dispatch({
      type: ActivitiesActionTypes.CreateActivity,
      payload: { start: new Date(), taskId }
    });
  }

  prepareActivity(
    tasks: Array<Task>,
    activity: Activity,
    index: number,
    activitiesArray: Array<Activity>
  ) {
    const task = tasks.find(({ id }) => id === activity.taskId);
    let duration: Observable<number>;
    if (index === 0) {
      duration = this.counter.pipe(map(() => Date.now() - +activity.start));
    } else {
      duration = of(+activitiesArray[index - 1].start - +activity.start);
    }
    return {
      start: activity.start,
      task,
      duration
    };
  }

  prepareActivities(
    activities: Array<Activity>,
    tasks: Array<Task>
  ): Array<{ start: Date; task: Task; duration: Observable<number> }> {
    return activities
      .sort((a, b) => +b.start - +a.start)
      .filter((activity) => activity.taskId)
      .map((activity, index, activitiesArray) =>
        this.prepareActivity(tasks, activity, index, activitiesArray)
      );
  }
}

export interface IPreparedActivity {
  start: Date;
  task: Task;
  duration: Observable<number> | number;
}
