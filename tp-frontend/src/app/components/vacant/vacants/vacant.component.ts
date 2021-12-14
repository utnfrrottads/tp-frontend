import { VacanteModel } from './../../../models/vacante-model';
import { Component, OnInit } from '@angular/core';
import { VacantService } from '../../../services/vacant/vacant.service';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-vacant',
  templateUrl: './vacant.component.html',
  styleUrls: ['./vacant.component.css']
})
export class VacantComponent implements OnInit {

  vacancies: VacanteModel[] = [];
  
  constructor( 
    private vacantService: VacantService,
    public dialog: MatDialog,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      if ( params.searchTerm ) {
        this.filterVacancies( params.searchTerm );
      } else {
        this.getAllVacancies();
      }
    });
  }

  getAllVacancies() {
    this.vacantService.getVacancies().subscribe(
      res => {
        this.vacancies = res;
      }
    );
  };

  reloadVacancies() {
    this.getAllVacancies();
  };

  filterVacancies( searchTerm: string ) {
    this.vacantService.getFilteredVacanciesByCompanyName( searchTerm ).subscribe(
      res => {
        this.vacancies = res;
      }
    );
  };
  
}