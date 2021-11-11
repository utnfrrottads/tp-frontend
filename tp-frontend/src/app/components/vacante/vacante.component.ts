import { EmpresaModel } from '../../models/empresa-model';
import { Component, OnInit } from '@angular/core';
import { VacanteService } from './../../services/vacante.service';


@Component({
  selector: 'app-vacante',
  templateUrl: './vacante.component.html',
  styleUrls: ['./vacante.component.css']
})
export class VacanteComponent implements OnInit {

  vacantesEmpresa: EmpresaModel[] = [];
  loaded: boolean = false;

  constructor( private vacanteService: VacanteService ) { }

  ngOnInit(): void {

    this.vacanteService.getVacantesEmpresa().subscribe(
      res => {
        this.vacantesEmpresa = res
        console.log(res);
        this.loaded = true;
      }
    );

  }

}
