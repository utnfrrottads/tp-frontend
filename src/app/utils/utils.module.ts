import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMessagePipe } from './error-message-pipe/error-message.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalDialogComponent } from './modal-dialog/modal-dialog.component';
import { CarouselComponent } from './carousel/carousel.component';
import { RouterModule } from '@angular/router';
import { ToggleGridComponent } from './toggle-grid/toggle-grid.component';



@NgModule({
  declarations: [
    ErrorMessagePipe,
    ModalDialogComponent,
    CarouselComponent,
    ToggleGridComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    CommonModule,
    ErrorMessagePipe,
    ModalDialogComponent,
    CarouselComponent,
    ToggleGridComponent,
    ReactiveFormsModule,
  ],
})
export class UtilsModule { }
