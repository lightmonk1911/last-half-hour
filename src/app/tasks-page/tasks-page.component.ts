import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../task/task.model';
import { TasksFilterService } from '../tasks-filter/tasks-filter.service';

@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.scss']
})
export class TasksPageComponent implements OnInit {
  tasks$: Observable<Array<Task>>;

  constructor(private tasksFilter: TasksFilterService) {
    this.tasks$ = this.tasksFilter.filteredTasks$;
  }

  ngOnInit() {}
}
