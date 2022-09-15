import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgDynamicBreadcrumbService } from 'ng-dynamic-breadcrumb';
import { IArticle } from 'src/app/entities/article';
import { ErrorService } from 'src/app/services/error.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss'],
})
export class ArticleDetailComponent implements OnInit {

  article: IArticle = {} as IArticle;

  constructor(
    private route: ActivatedRoute,
    private http: HttpService,
    private router: Router,
    private errorService: ErrorService,
    private breadcrum: NgDynamicBreadcrumbService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: ({ articleId }) => {
        this.http.getArticleById(articleId).subscribe({
          next: (res) => {
            this.article = res;
            this.breadcrum.updateBreadcrumbLabels({ articleCode: this.article.code });
          },
          error: (err) => {
            this.errorService.setError(err);
            this.router.navigate(['error']);
          },
        });
      },
    });
  }

  edit(): void {
    this.router.navigate(['article', 'edit', this.article._id]);
  }
}
