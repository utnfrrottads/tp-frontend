import { Component, Input } from '@angular/core';
import { IArticle } from 'src/app/entities/article';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss'],
})
export class ArticlesListComponent {

  @Input() articles: IArticle[] = [];
  gridView = false;

  toggleGridView(e: boolean): void {
    this.gridView = e;
  }
}
