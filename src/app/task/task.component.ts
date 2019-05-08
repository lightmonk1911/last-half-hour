import { Component, OnInit, Input } from '@angular/core';
import { Task } from './task.model';
import { Store, Action } from '@ngrx/store';
import { MarkAsRemoved, TaskActionTypes } from './task.actions';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;

  constructor(private store: Store<{}>) {}

  ngOnInit() {}

  markAsRemoved() {
    const action: MarkAsRemoved = {
      type: TaskActionTypes.MarkAsRemoved,
      payload: { ...this.task, removed: true }
    };
    this.store.dispatch(action);
  }

  markAsDone() {
    const action: MarkAsRemoved = {
      type: TaskActionTypes.MarkAsRemoved,
      payload: { ...this.task, done: true }
    };
    this.store.dispatch(action);
  }
}
