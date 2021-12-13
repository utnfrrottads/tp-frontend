import { MatTableDataSource } from '@angular/material/table';
import { EmpresaModel } from './../../../models/empresa-model';
import { CompanyService } from './../../../services/company/company.service';
import { AlertService } from './../../../services/alert/alert.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VacanteModel } from './../../../models/vacante-model';
import { VacantService } from './../../../services/vacant/vacant.service';

@Component({
  selector: 'app-edit-vacant',
  templateUrl: './edit-vacant.component.html',
  styleUrls: ['./edit-vacant.component.css']
})
export class EditVacantComponent implements OnInit {
  displayedColumns: string[] = ['Nro','Descripción del requerimiento','Acción'];
  
  companies: EmpresaModel[] = [];
  selectedVacant!: VacanteModel;
  
  requirements!: MatTableDataSource<any>;
  requirement: any = {};

  loading: boolean = false;
  
  constructor( private activatedroute: ActivatedRoute, 
               private vacantService: VacantService,
               private companyService: CompanyService,
               private alertService: AlertService, 
               private router: Router ) { }

  ngOnInit(): void {
    this.loading = true;
    this.getAllCompanies();
    this.loadVacant();
  }

  loadVacant() {
    const id = this.activatedroute.snapshot.paramMap.get('id');

    if ( !id ) {
      return;
    };

    const id_vacant = parseInt(id, 10);

    this.vacantService.getVacantById( id_vacant ).subscribe(
      res => {
        this.selectedVacant = res;
        this.requirements = new MatTableDataSource(this.selectedVacant.requerimientos);
        this.loading = false;
      },
      err => console.error(err));
  };

  getAllCompanies() {
    this.companyService.getAllCompanies().subscribe(
      res => this.companies = res,
    );
  };

  addNewVacant() {
    if ( this.isValid() ) {

      this.vacantService.editVacant(this.selectedVacant).subscribe(
        () => {
          this.alertService.openSnackBar('Vacante actualizada correctamente');
          this.router.navigate(['/main/vacantes']);
        },
        error => console.log(error)
      );
    } else {
       this.alertService.openSnackBar('Debe completar los datos obligatorios (*)');
    }
  };

  cancel() {
    this.router.navigate(['/main/vacantes']);
  };

  addRequirement() {
    if ( Object.keys(this.requirement).length ) {
      this.selectedVacant.requerimientos.push(this.requirement);
      this.requirements = new MatTableDataSource(this.selectedVacant.requerimientos);
      this.requirement = {};
    }
  };

  removeRequirement( index: number ) {
    this.selectedVacant.requerimientos.splice(index, 1);
    this.requirements = new MatTableDataSource(this.selectedVacant.requerimientos);
  };

  isValid() {
    if ( this.selectedVacant.cargo && this.selectedVacant.id_empresa ) {
      return true;
    } else {
      return false;
    }
  };

}
