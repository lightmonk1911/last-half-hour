import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../task/task.model';
import { FilterName, filters } from './filter-tasks-pipe.filters';

@Pipe({
  name: 'filterTasksPipe'
})
export class FilterTasksPipePipe implements PipeTransform {

  transform(tasks: Array<Task>, tasksFilters: Array<FilterName>): any {
    return tasks.filter((task) =>
      tasksFilters
        .map((filterName) => filters[filterName].filterFunc)
        .every((filterFunc) => filterFunc(task))
    );
  }

}
