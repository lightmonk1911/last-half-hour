import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Task } from '../task/task.model';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.scss']
})
export class TaskPageComponent implements OnInit {
  constructor(private store: Store<{ tasks: Array<Task> }>) {}

  ngOnInit() {}
}
