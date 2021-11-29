import { EmpresaModel } from '../../models/empresa-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VacantService {

  readonly baseUrl: string = 'http://localhost:8080'

  constructor( private http: HttpClient ) { }

  getVacantesEmpresa() {
    return this.http.get<EmpresaModel[]>(`${ this.baseUrl }/vacantes`);
  }

  deleteVacant( id: number ) {
    return this.http.delete(`${ this.baseUrl }/vacantes/${ id }`);
  }

}
