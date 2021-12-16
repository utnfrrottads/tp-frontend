import { VacanteModel } from './../../../models/vacante-model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert/alert.service';
import { VacantService } from 'src/app/services/vacant/vacant.service';

@Component({
  selector: 'app-vacant-card',
  templateUrl: './vacant-card.component.html',
  styleUrls: ['./vacant-card.component.css']
})
export class VacantCardComponent implements OnInit {

  @Input() vacant!: VacanteModel;
  @Input() index: number = 0;

  @Output() getAllVacanciesEvent: EventEmitter<VacanteModel> = new EventEmitter<VacanteModel>();

  msg = "¿Está seguro que desea eliminar la vacante?";

  constructor( 
    private vacantService: VacantService,
    private alertService: AlertService,
    private router: Router 
  ) { }

  ngOnInit(): void {
  }

  deleteVacant( id: number ) {
    this.alertService.confirm( this.msg ).afterClosed().subscribe( result => {
      if ( result ) {
        this.vacantService.deleteVacant( id ).subscribe(
          () => {
            this.alertService.openSnackBar('Vacante eliminada con éxito');
            this.getAllVacanciesEvent.emit();
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
