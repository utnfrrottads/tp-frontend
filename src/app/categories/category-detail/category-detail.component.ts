import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICategory } from 'src/app/entities/category';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss'],
})
export class CategoryDetailComponent implements OnInit {

  category: ICategory = {} as ICategory;

  constructor(
    private route: ActivatedRoute,
    private http: HttpService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: ({ categoryName }) => {
        this.http.getCategoryByName(categoryName).subscribe({
          next: (res) => {
            this.category = res;
          },
        });
      },
    });
  }

}
