import { Component, Input, OnInit } from '@angular/core';
import { ICategory } from 'src/app/entities/category';
import { HttpService } from 'src/app/services/http.service';

declare var $: any;

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss'],
})
export class CategoriesListComponent implements OnInit {
  // @Input() categories: ICategory[] = [];
  categories: ICategory[] = [];
  gridView = true;

  constructor(
    private http: HttpService,
  ) {}

  ngOnInit(): void {
    this.http.getCategories().subscribe({
      next: (res) => {
        this.categories = res;
      },
      error: () => {},
    });
  }

}
