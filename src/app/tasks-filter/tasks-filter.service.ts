import { Injectable } from '@angular/core';
import { Task } from '../task/task.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ITasksFilter, FilterName, filters } from './tasks-filter.filters';

@Injectable({
  providedIn: 'root'
})
export class TasksFilterService {
  filteredTasks$: Observable<Array<Task>>;

  constructor(private store: Store<{ tasksFilters: Array<FilterName>; tasks: Array<Task> }>) {
    this.filteredTasks$ = this.store.select(({ tasks, tasksFilters }) =>
      this.filterTasks(tasks, tasksFilters)
    );
  }

  filterTasks(tasks: Array<Task>, tasksFilters: Array<FilterName>) {
    return tasks.filter((task) =>
      tasksFilters
        .map((filterName) => filters[filterName].filterFunc)
        .every((filterFunc) => filterFunc(task))
    );
  }
}
