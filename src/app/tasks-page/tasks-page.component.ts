import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../task/task.model';
import { Store } from '@ngrx/store';
import { FilterName } from '../filter-tasks-pipe/filter-tasks-pipe.filters';
import { ActivitiesService } from '../activities/activities.service';

@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.scss']
})
export class TasksPageComponent implements OnInit {
  tasks$: Observable<Array<Task>>;
  filters$: Observable<Array<FilterName>>;
  currentTaskId$: Observable<string>;


  constructor(
    private store: Store<{ tasksFilters: Array<FilterName>; tasks: Array<Task> }>,
    private activitiesService: ActivitiesService
  ) {
    this.tasks$ = this.store.select('tasks');
    this.filters$ = this.store.select('tasksFilters');
    this.currentTaskId$ = this.activitiesService.currentTaskId$;
  }

  ngOnInit() {}
}
