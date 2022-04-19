import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogContentComponent } from 'src/app/components/shared/dialog-content/dialog-content.component';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  snackBarConfig: MatSnackBarConfig = {
    horizontalPosition: 'center',
    verticalPosition: 'top',
    duration: 5000
  };

  
  constructor(
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  confirm( msg: string ) {
    return this.dialog.open(DialogContentComponent, {
      width: '50%',
      height: '30%',
      data: { msg },
    });
  };

  openSnackBar(msg: string, action: string = 'Cerrar') {
    this.snackBar.open(msg, action, this.snackBarConfig);
  }

}
