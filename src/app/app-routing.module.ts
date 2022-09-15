import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesListComponent } from './articles/articles-list/articles-list.component';

import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
    data: {
      title: 'Home',
      breadcrumb: [
        {
          label: 'Home',
          url: '/home',
        },
      ],
    },
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home/search',
    component: ArticlesListComponent,
    data: {
      title: 'Search',
      breadcrumb: [
        {
          label: 'Search Article',
          url: '/home/search',
        },
      ],
    },
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    data: {
      title: 'Not Found',
      breadcrumb: [
        {
          label: 'Not Found',
          url: '',
        },
      ],
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
