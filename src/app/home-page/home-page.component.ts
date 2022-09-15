import { Component, OnInit } from '@angular/core';
import { IArticle } from '../entities/article';
import { ArticleService } from '../services/article.service';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {

  articles: IArticle[] = [];
  // categories: ICategory[] = [];

  constructor(
    private http: HttpService,
    private articleService: ArticleService,
  ) { }

  ngOnInit(): void {
    this.http.getArticles().subscribe({
      next: (res) => {
        this.articles = res;
      },
      error: () => {},
    });

    this.articleService.setArticles(this.articles);

    /*
    this.http.getCategories().subscribe({
      next: (res) => {
        this.categories = res;
      },
      error: () => {},
    });
    */
  }

}
