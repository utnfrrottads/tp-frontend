import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent implements OnInit {

  searchTerm: string = '';

  constructor( private activatedRoute: ActivatedRoute,
    private router: Router ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      if ( params.searchTerm ) {
        this.searchTerm = params.searchTerm;
      }
    })
  }

  search(): void {
    if ( this.searchTerm ) {
      this.router.navigateByUrl(`/main/search/${ this.searchTerm }`);
    }
  }

}
