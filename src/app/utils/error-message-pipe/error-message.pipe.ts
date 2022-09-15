import { Pipe, PipeTransform } from '@angular/core';
import { IError } from '../../entities/error';

@Pipe({
  name: 'errorMessage',
})
export class ErrorMessagePipe implements PipeTransform {

  transform(value: IError, ...args: []): string {
    if (value.status) {
      return `Error ${value.status} - ${value.statusText}`;
    }
    return 'An error has happened';
  }

}
