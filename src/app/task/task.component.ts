import { Component, OnInit, Input } from '@angular/core';
import { Task } from './task.model';
import { Store } from '@ngrx/store';
import { TaskActionTypes, UpdateTask } from './task.actions';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  removedClass = 'task--removed';
  doneClass = 'task--done';
  classesObj: any;

  constructor(private store: Store<{}>) {}

  ngOnInit() {
    this.classesObj = {
      [this.removedClass]: this.task.removed,
      [this.doneClass]: this.task.done
    };
  }

  updateTask(task: Task) {
    const action: UpdateTask = {
      type: TaskActionTypes.UpdateTask,
      payload: task
    };
    this.store.dispatch(action);
  }

  markAsRemoved() {
    const newTask = { ...this.task, removed: true };
    this.updateTask(newTask);
  }

  markAsDone() {
    const newTask = { ...this.task, done: true };
    this.updateTask(newTask);
  }

  undone() {
    const newTask = { ...this.task, done: false };
    this.updateTask(newTask);
  }

  recover() {
    const newTask = { ...this.task, removed: false };
    this.updateTask(newTask);
  }
}
