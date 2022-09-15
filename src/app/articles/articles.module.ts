import { NgModule } from '@angular/core';
import { ArticlesRoutingModule } from './articles-routing.module';

import { UtilsModule } from '../utils/utils.module';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleFormComponent } from './article-form/article-form.component';

@NgModule({
  declarations: [
    ArticlesListComponent,
    ArticleDetailComponent,
    ArticleFormComponent,
  ],
  imports: [
    UtilsModule,
    ArticlesRoutingModule,
  ],
  exports: [
    ArticlesListComponent,
    ArticleDetailComponent,
  ],
})
export class ArticlesModule { }
