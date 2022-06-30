import { Component, EventEmitter, Output } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-toggle-grid',
  templateUrl: './toggle-grid.component.html',
  styleUrls: ['./toggle-grid.component.scss'],
})
export class ToggleGridComponent {

  gridView = false;
  @Output() viewChanges = new EventEmitter();

  toggleGridView(): void {
    this.gridView = !this.gridView;
    this.viewChanges.emit(this.gridView);
    setTimeout(() => {
      $('[data-toggle]').tooltip('hide');
    }, 1000);
  }
}
