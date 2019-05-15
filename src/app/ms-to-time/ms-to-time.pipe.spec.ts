import { MsToTimePipe } from './ms-to-time.pipe';

describe('MsToTimePipe', () => {
  it('create an instance', () => {
    const pipe = new MsToTimePipe();
    expect(pipe).toBeTruthy();
  });
  it('getHours', () => {
    const pipe = new MsToTimePipe();
    expect(pipe.transform(3600000)).toBe('01:00:00');
  });
});
