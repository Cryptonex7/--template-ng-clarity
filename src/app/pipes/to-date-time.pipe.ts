import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toDateTime',
})
export class ToDateTimePipe implements PipeTransform {
  transform(timestamp: number | string): string {
    return typeof timestamp === 'number'
      ? new Date(timestamp).toString()
      : new Date(Number.parseInt(timestamp)).toString();
  }
}
