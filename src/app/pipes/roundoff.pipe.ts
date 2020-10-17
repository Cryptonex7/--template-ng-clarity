import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundoff'
})
export class RoundoffPipe implements PipeTransform {

  transform(value: number): number {
    return Math.round(value);
  }

}
