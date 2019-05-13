import { TestBed } from '@angular/core/testing';

import { TasksFilterService } from './tasks-filter.service';

describe('TasksFilterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TasksFilterService = TestBed.get(TasksFilterService);
    expect(service).toBeTruthy();
  });
});
