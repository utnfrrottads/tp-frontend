import { VacanteModel } from './../../../models/vacante-model';
import { AlertService } from '../../../services/alert/alert.service';
import { Component, OnInit } from '@angular/core';
import { VacantService } from '../../../services/vacant/vacant.service';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-vacant',
  templateUrl: './vacant.component.html',
  styleUrls: ['./vacant.component.css']
})
export class VacantComponent implements OnInit {

  datosVacantes: VacanteModel[] = [];
  msg = "¿Está seguro que desea eliminar la vacante?";

  constructor( 
    private vacantService: VacantService,
    private alertService: AlertService,
    public dialog: MatDialog,
    ) { }

  ngOnInit(): void {
    this.getAllVacants();
  }

  getAllVacants() {
    this.vacantService.getVacantesEmpresa().subscribe(
      res => {
        this.datosVacantes = res;
      }
    );
  }

  deleteVacant( id: number ) {
    this.alertService.confirm( this.msg ).afterClosed()
        .subscribe( result => {

            if ( result ) {
              this.vacantService.deleteVacant( id ).subscribe(
                res => this.getAllVacants()
              ); 
            }
        });
  }
  
}