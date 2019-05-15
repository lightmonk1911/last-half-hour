import { Component, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Store } from '@ngrx/store';
import { ActionTypes, CreateTask } from './new-task-form.actions';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Task } from '../task/task.model';

@Component({
  selector: 'app-new-task-form',
  templateUrl: './new-task-form.component.html',
  styleUrls: ['./new-task-form.component.scss']
})
export class NewTaskFormComponent implements OnInit {
  form: FormGroup;

  constructor(fb: FormBuilder, private store: Store<{}>) {
    this.form = fb.group({
      taskName: ['', Validators.required]
    });
  }

  ngOnInit() {}

  onSubmit(formValue: { taskName: string }): void {
    const { taskName: name } = formValue;
    const id = Guid.create().toString();
    const action: CreateTask = {
      type: ActionTypes.CreateTask,
      payload: new Task(id, name, false, false)
    };
    this.store.dispatch(action);
  }
}
