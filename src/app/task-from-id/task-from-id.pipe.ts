import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskFromId'
})
export class TaskFromIdPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
