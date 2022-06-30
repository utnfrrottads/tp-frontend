import { Component, OnInit } from '@angular/core';
import { IArticle } from '../entities/article';
import { ICategory } from '../entities/category';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {

  articles: IArticle[] = [];
  categories: ICategory[] = [];

  constructor(
    private http: HttpService,
  ) { }

  ngOnInit(): void {
    this.http.getArticles().subscribe({
      next: (res) => {
        this.articles = res;
      },
      error: () => {},
    });
    this.http.getCategories().subscribe({
      next: (res) => {
        this.categories = res;
      },
      error: () => {},
    });
  }

}
