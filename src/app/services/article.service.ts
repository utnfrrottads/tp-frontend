import { Injectable } from '@angular/core';
import { IArticle } from '../entities/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private articles: IArticle[] = [];

  getArticles(): IArticle[] {
    return this.articles;
  }
  setArticles(articles: IArticle[]): void {
    this.articles = articles;
  }
}
