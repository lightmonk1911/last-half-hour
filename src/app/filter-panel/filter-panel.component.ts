import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActionTypes } from './filter-panel.actions';
import { filters, FilterName } from '../filter-tasks-pipe/filter-tasks-pipe.filters';

@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.scss']
})
export class FilterPanelComponent implements OnInit {
  preparedFilters: { name: string; nameOnPage: string; checked: boolean }[];

  constructor(private store: Store<{ tasksFilters: Array<FilterName> }>) {}

  ngOnInit() {
    this.store.select('tasksFilters').subscribe((enabledFilters) => {
      this.preparedFilters = Object.entries(filters).map(([key, value]) => ({
        name: key,
        nameOnPage: value.nameOnPage,
        checked: enabledFilters.includes(key)
      }));
    });
  }

  changeFilter(filterName: FilterName, value: boolean) {
    this.store.dispatch({
      type: ActionTypes[value ? 'EnableFilter' : 'DisableFilter'],
      payload: filterName
    });
  }
}
