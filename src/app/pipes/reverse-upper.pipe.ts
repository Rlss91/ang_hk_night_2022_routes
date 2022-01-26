import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseUpper',
})
export class ReverseUpperPipe implements PipeTransform {
  transform(value: string): string {
    // console.log(value);
    let str: string = '';
    for (let i = value.length - 1; i >= 0; i--) {
      str += value[i];
    }
    return str.toUpperCase();
  }
}
