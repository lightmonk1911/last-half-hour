import { Component, OnInit } from '@angular/core';
import { ActivitiesService, IPreparedActivity } from '../activities/activities.service';
import { Observable, of, combineLatest } from 'rxjs';
import { Task } from '../task/task.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-statistic-page',
  templateUrl: './statistic-page.component.html',
  styleUrls: ['./statistic-page.component.scss']
})
export class StatisticPageComponent implements OnInit {
  statisticItems$: Observable<Array<{ task: Task; spent$: Observable<number> }>>;

  constructor(private activitiesServise: ActivitiesService) {}

  ngOnInit() {
    this.statisticItems$ = this.activitiesServise.prepared$.pipe(
      map((prepared) =>
        prepared
          .reduce((acc, activity) => {
            const statisticItem = acc.find(({ task: { id } }) => id === activity.task.id);
            if (!statisticItem) {
              acc.push({ task: activity.task, durations: [activity.duration] });
              return acc;
            }
            statisticItem.durations.push(activity.duration);
            return acc;
          }, [])
          .map((statisticItem) => {
            const combined$ = combineLatest(statisticItem.durations);
            const spent$ = combined$.pipe(
              map((durations: Array<number>) => durations.reduce((acc, duration) => acc + duration))
            );
            return { task: statisticItem.task, spent$ };
          })
      )
    );
  }
}
