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
    this.vacant.requirements = [];
    this.getAllCompanies();
  }
  
  getAllCompanies() {
    this.companyService.getAllCompanies().subscribe(
      res => this.companies = res,
    );
  };

  addNewVacant() {

    if ( this.isValid() ) {
      this.alertService.openSnackBar('Vacante creada correctamente');
    } else {
      return this.alertService.openSnackBar('Debe completar los datos obligatorios (*)');
    }

    this.vacantService.addVacant(this.vacant).subscribe(
      res => {
        this.router.navigate(['/main/vacantes']);
      },
      error => console.log(error)
    );
  };

  cancel() {
    this.router.navigate(['/main/vacantes']);
  };

  addRequirement() {
    if ( Object.keys(this.requirement).length ) {
      this.vacant.requirements.push(this.requirement);
      this.requirements = new MatTableDataSource(this.vacant.requirements);
      this.requirement = {};
    }
  };

  removeRequirement( index: number ) {
    this.vacant.requirements.splice(index, 1);
    this.requirements = new MatTableDataSource(this.vacant.requirements);
  };

  isValid() {
    if ( this.vacant.work_position && this.vacant.vacant_description && this.vacant.id_company ) {
      return true;
    } else {
      return false;
    }
  };

}
