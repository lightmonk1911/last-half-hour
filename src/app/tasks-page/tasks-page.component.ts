import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../task/task.model';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.scss']
})
export class TasksPageComponent implements OnInit {
  tasks$: Observable<Array<Task>>;

  constructor(private store: Store<{ tasks: Array<Task> }>) {}

  ngOnInit() {
    this.tasks$ = this.store.select('tasks');
    this.tasks$.subscribe((tasks) => console.log('tasks', tasks));
  }
}
