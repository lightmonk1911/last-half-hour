import { Task } from '../task/task.model';

export class Activity {
  constructor(public start: Date, public task: Task) {}
}
