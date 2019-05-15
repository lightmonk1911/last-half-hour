import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Task } from './task.model';
import { Store } from '@ngrx/store';
import { TaskActionTypes, UpdateTask } from './task.actions';
import { ActivitiesService } from '../activities/activities.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  @Input() isCurrent: boolean;
  @HostBinding('attr.class') hostClass = '';
  removedClass = 'list-group-item-light';
  doneClass = 'list-group-item-success';

  constructor(private store: Store<{}>, private activitiesService: ActivitiesService) {}

  ngOnInit() {
    this.hostClass = `${this.task.removed ? this.removedClass : ''} ${
      this.task.done ? this.doneClass : ''
    }`;
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

  start() {
    this.activitiesService.createActivity(this.task.id);
  }

  recover() {
    const newTask = { ...this.task, removed: false };
    this.updateTask(newTask);
  }
}
