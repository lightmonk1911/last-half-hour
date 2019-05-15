import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'msToTime'
})
export class MsToTimePipe implements PipeTransform {
  format(value: number) {
    return value.toString().padStart(2, '0');
  }
  transform(value: number): any {
    const hours = Math.floor(value / (60 * 60 * 1000));
    const minutes = Math.floor((value - hours * 60 * 60 * 1000) / (60 * 1000));
    const seconds = Math.floor((value - minutes * 60 * 1000 - hours * 60 * 60 * 1000) / 1000);
    return `${this.format(hours)}:${this.format(minutes)}:${this.format(seconds)}`;
  }
}
