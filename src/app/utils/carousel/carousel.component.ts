import { Component, Input, OnInit } from '@angular/core';
import { ICarouselable } from 'src/app/entities/carouselable';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {

  @Input() data: ICarouselable[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
