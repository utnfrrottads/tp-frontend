import { VacanteModel } from './../../models/vacante-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VacantService {

  readonly baseUrl: string = 'http://localhost:8080'

  constructor( private http: HttpClient ) { }

  getVacancies(): Observable<VacanteModel[]> {
    return this.http.get<VacanteModel[]>(`${ this.baseUrl }/vacantes`);
  };
  
  getVacantById( id: number ): Observable<VacanteModel> {
    return this.http.get<VacanteModel>(`${ this.baseUrl }/vacantes/${ id }`);
  };

  addVacant( vacant: VacanteModel ): Observable<VacanteModel> {
    return this.http.post<VacanteModel>(`${ this.baseUrl }/vacantes`, vacant);
  };

  editVacant( vacant: VacanteModel ): Observable<VacanteModel> {
    return this.http.put<VacanteModel>(`${ this.baseUrl }/vacantes/${ vacant.id_vacante }`, vacant);
  };

  deleteVacant( id: number ): Observable<VacanteModel> {
    return this.http.delete<VacanteModel>(`${ this.baseUrl }/vacantes/${ id }`);
  };

}
