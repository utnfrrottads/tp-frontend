import { VacanteModel } from './../../../models/vacante-model';
import { AlertService } from '../../../services/alert/alert.service';
import { Component, OnInit } from '@angular/core';
import { VacantService } from '../../../services/vacant/vacant.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';


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
    ) { }

  ngOnInit(): void {
    this.getAllVacancies();
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
  }
  
}