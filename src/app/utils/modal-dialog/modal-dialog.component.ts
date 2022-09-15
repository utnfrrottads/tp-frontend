import { Component, ElementRef, EventEmitter, Input, OnChanges, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.scss'],
})
export class ModalDialogComponent implements OnChanges {

  @ViewChild('modalBtn') modalBtn!: ElementRef<HTMLButtonElement>;
  @Input() modalMsg: any;
  @Output() retry = new EventEmitter();

  ngOnChanges(): void {
    if (this.modalMsg) {
      this.modalBtn.nativeElement.click();
    }
  }

  retrying(): void {
    this.retry.emit();
  }

}
