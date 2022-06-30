import { Component, OnInit } from '@angular/core';
import { IError } from '../entities/error';
import { ErrorService } from '../services/error.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent implements OnInit {

  error: IError = {} as IError;

  constructor(
    private errorService: ErrorService,
  ) { }

  ngOnInit(): void {
    this.error = this.errorService.getError();
  }

}
