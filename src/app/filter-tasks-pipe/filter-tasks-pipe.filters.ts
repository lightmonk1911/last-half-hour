import { Task } from '../task/task.model';

export const filters = {
  notRemoved: { filterFunc: (task: Task) => !task.removed, nameOnPage: 'Скрыть удаленные' },
  notDone: { filterFunc: (task: Task) => !task.done, nameOnPage: 'Скрыть завершенные' }
};

export type TasksFilterFunc = (task: Task) => boolean;
export interface ITasksFilter {
  filterFunc: TasksFilterFunc;
  nameOnPage: string;
}

export type FilterName = string;
