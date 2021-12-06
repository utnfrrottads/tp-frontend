import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.css']
})
export class DialogContentComponent implements OnInit {

  msg:string = "";

  constructor(
    public dialogRef: MatDialogRef<DialogContentComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    this.msg = this.data.msg;
  }

  buttonPressed( accept: boolean ) {
    this.dialogRef.close( accept );
  }

}
