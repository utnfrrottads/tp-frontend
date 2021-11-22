import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogContentComponent } from 'src/app/components/dialog-content/dialog-content.component';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    public dialog: MatDialog
  ) { }

  confirm( msg: string ) {
    return this.dialog.open(DialogContentComponent, {
      width: '50%',
      height: '30%',
      data: { msg },
    });
  }

}
