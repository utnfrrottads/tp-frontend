import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit(): void {
    $(document).ready(() => {
      $('[data-toggle]').tooltip({
        delay: { show: 50, hide: 300},
      });
    });
  }
}
