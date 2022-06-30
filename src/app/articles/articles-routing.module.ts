import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleFormComponent } from './article-form/article-form.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';

const routes: Routes = [
  {
    path: 'articles',
    component: ArticlesListComponent,
    data: {
      title: 'Articles',
      breadcrumb: [
        {
          label: 'Articles',
          url: '/articles',
        },
      ],
    },
  },
  {
    path: 'articles/:articleId',
    component: ArticleDetailComponent,
    data: {
      title: 'Article {{articleCode}}',
      breadcrumb: [
        {
          label: 'Articles',
          url: '/articles',
        },
        {
          label: 'Detail: {{articleCode}}',
          url: '/articles/:articleId',
        },
      ],
    },
  },
  {
    path: 'article/create',
    component: ArticleFormComponent,
    data: {
      title: 'Create article',
      breadcrumb: [
        {
          label: 'Articles',
          url: '/articles',
        },
        {
          label: 'Create',
          url: '/articles/create',
        },
      ],
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticlesRoutingModule { }
