import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ITasksFilter, filters, FilterName } from '../tasks-filter/tasks-filter.filters';
import { ActionTypes } from './filter-panel.actions';

@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.scss']
})
export class FilterPanelComponent implements OnInit {
  preparedFilters = Object.entries(filters).map(([key, value]) => ({
    name: key,
    nameOnPage: value.nameOnPage
  }));

  constructor(private store: Store<{ tasksFilters: Array<ITasksFilter> }>) {}

  ngOnInit() {}

  changeFilter(filterName: FilterName, value: boolean) {
    this.store.dispatch({
      type: ActionTypes[value ? 'EnableFilter' : 'DisableFilter'],
      payload: filterName
    });
  }
}
