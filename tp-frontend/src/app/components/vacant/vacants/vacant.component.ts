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
  msg = "¿Está seguro que desea eliminar la vacante?";

  constructor( 
    private vacantService: VacantService,
    private alertService: AlertService,
    public dialog: MatDialog,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getAllVacants();
  }

  getAllVacants() {
    this.vacantService.getVacancies().subscribe(
      res => {
        this.vacancies = res;
      }
    );
  };

  deleteVacant( id: number ) {
    this.alertService.confirm( this.msg ).afterClosed().subscribe( result => {
      if ( result ) {
        this.vacantService.deleteVacant( id ).subscribe(
          () => {
            this.alertService.openSnackBar('Vacante eliminada con éxito');
            this.getAllVacants();
          },
          error => console.log(error)
        ); 
      }
    });
  };

  seeMore( id: number) {
    this.router.navigate( [ 'main/vacante', id ] );
  };

  editVacant( id: number ) {
    this.router.navigate( [ 'main/vacantes/editar-vacante', id ] );
  };
  
}