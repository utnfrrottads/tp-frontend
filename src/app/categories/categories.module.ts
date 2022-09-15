import { NgModule } from '@angular/core';

import { UtilsModule } from '../utils/utils.module';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { CategoriesRoutingModule } from './categories-routing.module';

@NgModule({
  declarations: [
    CategoriesListComponent,
    CategoryFormComponent,
    CategoryDetailComponent,
  ],
  imports: [
    UtilsModule,
    CategoriesRoutingModule,
  ],
  exports: [
    CategoriesListComponent,
  ],
})
export class CategoriesModule { }
