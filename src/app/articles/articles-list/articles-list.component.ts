import { Component, Input, OnInit } from '@angular/core';
import { IArticle } from 'src/app/entities/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss'],
})
export class ArticlesListComponent implements OnInit{

  @Input() articles: IArticle[] = [];
  gridView = false;

  constructor(
    private articleService: ArticleService,
  ) { }

  ngOnInit(): void {
    if (this.articles.length === 0) {
      this.articles = this.articleService.getArticles();
    }
  }

  toggleGridView(e: boolean): void {
    this.gridView = e;
  }
}
