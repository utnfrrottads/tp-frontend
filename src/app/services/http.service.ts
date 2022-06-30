import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IArticle } from '../entities/article';
import { ICategory } from '../entities/category';
import { IProvider } from '../entities/provider';

@Injectable({
  providedIn: 'root',
})
export class HttpService {

  readonly baseUrl = 'http://192.168.43.37:4000/api';

  constructor(
    private http: HttpClient,
  ) { }

  getArticles(): Observable<IArticle[]> {
    const url = `${this.baseUrl}/articles`;
    return this.http.get<IArticle[]>(url);
  }

  getArticleById(articleId: number): Observable<IArticle> {
    const url = `${this.baseUrl}/articles/${articleId}`;
    return this.http.get<IArticle>(url);
  }

  createArticle(article: IArticle): Observable<IArticle> {
    const url =  `${this.baseUrl}/articles`;
    return this.http.post<IArticle>(url, article);
  }

  getCategories(): Observable<ICategory[]> {
    const url = `${this.baseUrl}/categories`;
    return this.http.get<ICategory[]>(url);
  }

  getCategoryByName(categoryName: string): Observable<ICategory> {
    const url = `${this.baseUrl}/categories/${categoryName}`;
    return this.http.get<ICategory>(url);
  }

  updateCategory(category: ICategory, oldName: string): Observable<ICategory> {
    const name = encodeURIComponent(oldName);
    const url = `${this.baseUrl}/categories/${name}`;
    return this.http.patch<ICategory>(url, category);
  }

  getProviders(): Observable<IProvider[]> {
    const url = `${this.baseUrl}/providers`;
    return this.http.get<IProvider[]>(url);
  }
}
