import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {
  transform(timestamp: number): string {
    return new Date(timestamp *1000).toTimeString().substr(0,18);
  }

}
