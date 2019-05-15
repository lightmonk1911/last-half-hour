import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Task } from '../task/task.model';
import { NgForm } from '@angular/forms';
import { ActivitiesActionTypes } from '../activities/activities.actions';
import { ActivitiesService } from '../activities/activities.service';

@Component({
  selector: 'app-new-activity-form',
  templateUrl: './new-activity-form.component.html',
  styleUrls: ['./new-activity-form.component.scss']
})
export class NewActivityFormComponent implements OnInit {
  tasks: Array<Task>;
  selectedTaskId: string;
  filters = ['notRemoved', 'notDone'];

  constructor(
    private store: Store<{ tasks: Array<Task> }>,
    private activitiesService: ActivitiesService
  ) {}

  onSubmit(form: NgForm) {
    this.activitiesService.createActivity(form.value.task);
  }

  ngOnInit() {
    this.store.select('tasks').subscribe((tasks) => {
      this.tasks = tasks;
    });
  }
}
