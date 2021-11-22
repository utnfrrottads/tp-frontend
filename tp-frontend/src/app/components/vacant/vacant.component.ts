import { EmpresaModel } from '../../models/empresa-model';
import { Component, OnInit } from '@angular/core';
import { VacanteService } from '../../services/vacante.service';


@Component({
  selector: 'app-vacante',
  templateUrl: './vacant.component.html',
  styleUrls: ['./vacant.component.css']
})
export class VacantComponent implements OnInit {

  datosEmpresa: EmpresaModel[] = [];

  constructor( private vacanteService: VacanteService ) { }

  ngOnInit(): void {

    this.vacanteService.getVacantesEmpresa().subscribe(
      res => {
        this.datosEmpresa = res;
      }
    );

  }

}
