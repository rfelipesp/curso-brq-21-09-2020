import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exemplo'
})
export class ExemploPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
