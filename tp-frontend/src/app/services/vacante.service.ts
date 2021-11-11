import { EmpresaModel } from './../models/empresa-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VacanteService {

  readonly baseUrl: string = 'http://localhost:8080'

  constructor( private http: HttpClient ) { }

  getVacantesEmpresa() {
    return this.http.get<EmpresaModel[]>(`${ this.baseUrl }/vacantes`);
  }

}
