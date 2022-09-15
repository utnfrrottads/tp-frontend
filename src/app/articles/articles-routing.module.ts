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
          url: '/article/:articleId',
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
  {
    path: 'article/edit/:articleId',
    component: ArticleFormComponent,
    data: {
      title: 'Edit Article {{articleCode}}',
      breadcrumb: [
        {
          label: 'Article',
          url: '/article',
        },
        {
          label: 'Edit Article: {{articleCode}}',
          url: '/article/edit/:articleId',
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
