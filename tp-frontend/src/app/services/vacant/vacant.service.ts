import { VacanteModel } from './../../models/vacante-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VacantService {

  readonly baseUrl: string = 'http://localhost:8080'

  constructor( private http: HttpClient ) { }

  getVacantesEmpresa() {
    return this.http.get<VacanteModel[]>(`${ this.baseUrl }/vacantes`);
  };

  addVacant( vacant: VacanteModel ) {
    return this.http.post(`${ this.baseUrl }/vacantes`, vacant);
  }

  deleteVacant( id: number ) {
    return this.http.delete(`${ this.baseUrl }/vacantes/${ id }`);
  };
  
  getVacantById( id: number ) {
    return this.http.get<VacanteModel>(`${ this.baseUrl }/vacantes/${ id }`);
  };

}
