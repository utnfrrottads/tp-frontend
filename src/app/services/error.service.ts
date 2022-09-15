import { Injectable } from '@angular/core';
import { IError } from '../entities/error';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {

  private error: IError = {} as IError;

  getError(): IError {
    return this.error;
  }
  setError(error: IError): void {
    this.error = error;
  }

}
