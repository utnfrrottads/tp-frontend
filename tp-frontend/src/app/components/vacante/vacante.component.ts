import { VacanteModel } from './../../models/vacante-model';
import { EmpresaModel } from '../../models/empresa-model';
import { Component, OnInit } from '@angular/core';
import { VacanteService } from './../../services/vacante.service';


@Component({
  selector: 'app-vacante',
  templateUrl: './vacante.component.html',
  styleUrls: ['./vacante.component.css']
})
export class VacanteComponent implements OnInit {

  datosEmpresa: EmpresaModel[] = [];

  constructor( private vacanteService: VacanteService ) { }

  ngOnInit(): void {

    this.vacanteService.getVacantesEmpresa().subscribe(
      res => {
        this.datosEmpresa = res
        console.log(res);
      }
    );

  }

}
