import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { ArticlesModule } from './articles/articles.module';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UtilsModule } from './utils/utils.module';
import { CategoriesModule } from './categories/categories.module';
import { NgDynamicBreadcrumbModule } from 'ng-dynamic-breadcrumb';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ArticlesModule,
    CategoriesModule,
    UtilsModule,
    AppRoutingModule, // RoutingModule have to be imported after others custom modules
    NgDynamicBreadcrumbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
