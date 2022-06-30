import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { CategoryFormComponent } from './category-form/category-form.component';

const routes: Routes = [
  {
    path: 'categories',
    component: CategoriesListComponent,
    data: {
      title: 'Categories',
      breadcrumb: [
        {
          label: 'Categories',
          url: '/categories',
        },
      ],
    },
  },
  {
    path: 'categories/edit/:categoryName',
    component: CategoryFormComponent,
    data: {
      title: 'Edit {{categoryName}}',
      breadcrumb: [
        {
          label: 'Categories',
          url: '/categories',
        },
        {
          label: 'Edit: {{categoryName}}',
          url: '/categories/edit/:categoryName',
        },
      ],
    },
  },
  { path: 'categories/edit', redirectTo: 'categories', pathMatch: 'full' },
  {
    path: 'categories/:categoryName',
    component: CategoryDetailComponent,
    data: {
      title: 'Category {{categoryName}}',
      breadcrumb: [
        {
          label: 'Categories',
          url: '/categories',
        },
        {
          label: 'Detail: {{categoryName}}',
          url: '/categories/:categoryName',
        },
      ],
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriesRoutingModule { }
