import { AlertService } from './../../services/alert/alert.service';
import { Component, OnInit } from '@angular/core';
import { VacanteService } from '../../services/vacant/vacante.service';
import { EmpresaModel } from '../../models/empresa-model';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-vacante',
  templateUrl: './vacant.component.html',
  styleUrls: ['./vacant.component.css']
})
export class VacantComponent implements OnInit {

  datosEmpresa: EmpresaModel[] = [];
  msg = "¿Estás seguro que desea eliminar la vacante?";

  constructor( 
    private vacanteService: VacanteService,
    private alertService: AlertService,
    public dialog: MatDialog,
    ) { }

  ngOnInit(): void {
    this.getAllVacants();
  }

  getAllVacants() {
    this.vacanteService.getVacantesEmpresa().subscribe(
      res => {
        this.datosEmpresa = res;
      }
    );
  }

  deleteVacant( id: number, idx: number ) {

    this.alertService.confirm( this.msg ).afterClosed()
        .subscribe( result => {

            if ( result ) {
              this.vacanteService.deleteVacant( id ).subscribe(
                res => this.getAllVacants()
              ); 
            }
        });
  }

}