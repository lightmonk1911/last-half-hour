import { TaskFromIdPipe } from './task-from-id.pipe';

describe('TaskFromIdPipe', () => {
  it('create an instance', () => {
    const pipe = new TaskFromIdPipe();
    expect(pipe).toBeTruthy();
  });
});
