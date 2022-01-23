import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replacePipe',
})
export class ReplacePipePipe implements PipeTransform {
  transform(value: string, fromtext: string, totext: string): string {
    return value.replace(fromtext, totext);
  }
}
