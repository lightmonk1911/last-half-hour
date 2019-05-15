import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Activity } from '../activity/activity.model';
import { Task } from '../task/task.model';
import { Observable } from 'rxjs';
import { ActivitiesService } from '../activities/activities.service';

@Component({
  selector: 'app-timeline-page',
  templateUrl: './timeline-page.component.html',
  styleUrls: ['./timeline-page.component.scss']
})
export class TimelinePageComponent implements OnInit {
  preparedActivties: Array<{ start: Date; task: Task; duration: Observable<number> }>;

  constructor(
    private store: Store<{ activities: Array<Activity>; tasks: Array<Task> }>,
    private activitiesServise: ActivitiesService
  ) {}

  ngOnInit() {
    this.store
      .select(({ tasks, activities }) => ({ tasks, activities }))
      .subscribe(({ tasks, activities }) => {
        this.preparedActivties = this.activitiesServise.prepareActivities(activities, tasks);
      });
  }
}
