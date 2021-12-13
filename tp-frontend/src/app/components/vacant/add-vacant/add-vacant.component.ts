import { AlertService } from './../../../services/alert/alert.service';
import { VacantService } from './../../../services/vacant/vacant.service';
import { CompanyService } from './../../../services/company/company.service';
import { EmpresaModel } from './../../../models/empresa-model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-add-vacant',
  templateUrl: './add-vacant.component.html',
  styleUrls: ['./add-vacant.component.css']
})
export class AddVacantComponent implements OnInit {
  displayedColumns: string[] = ['Nro','Descripción del requerimiento','Acción'];
  
  companies: EmpresaModel[] = [];
  vacant: any = {};
  requirement: any = {};
  requirements!: MatTableDataSource<any>;

  constructor( 
    private companyService: CompanyService, 
    private vacantService: VacantService,
    private alertService: AlertService, 
    private router: Router ) { }
    
  ngOnInit(): void {
    this.vacant.requerimientos = [];
    this.getAllCompanies();
  }
  
  getAllCompanies() {
    this.companyService.getAllCompanies().subscribe(
      res => this.companies = res,
    );
  };

  addNewVacant() {
    if ( this.isValid() ) {
      this.vacantService.addVacant(this.vacant).subscribe(
        () => {
          this.alertService.openSnackBar('Vacante creada correctamente');
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
      this.vacant.requerimientos.push(this.requirement);
      this.requirements = new MatTableDataSource(this.vacant.requerimientos);
      this.requirement = {};
    }
  };

  removeRequirement( index: number ) {
    this.vacant.requerimientos.splice(index, 1);
    this.requirements = new MatTableDataSource(this.vacant.requerimientos);
  };

  isValid() {
    if ( this.vacant.cargo && this.vacant.id_empresa ) {
      return true;
    } else {
      return false;
    }
  };

}
