import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'registro',
  standalone: true
})
export class RegistroPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
