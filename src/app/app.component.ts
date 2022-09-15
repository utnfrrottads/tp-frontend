import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { IArticle } from './entities/article';
import { ArticleService } from './services/article.service';
import { HttpService } from './services/http.service';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Cleanning Supplies App';
  articles: IArticle[] = [];

  findArticleForm = this.formBuilder.group({
    searchText: [''],
  });

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpService,
    private router: Router,
    private articleService: ArticleService,
  ) {  }

  ngOnInit(): void {
    $(document).ready(() => {
      $('[data-toggle]').tooltip({
        delay: { show: 50, hide: 300},
      });
    });
  }

  findArticleByPartialDescription(): void {
    const searchText = this.findArticleForm.value.searchText;
    this.findArticleForm.reset();

    this.http.getArticlesByDescription(searchText).subscribe({
      next: (res) => {
        this.articleService.setArticles(res);
        this.router.navigate(['home', 'search']);
      },
      error: (err) => console.log(err),
    });
  }
}
