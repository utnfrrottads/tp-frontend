import { EmpresaModel } from './../../models/empresa-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  readonly baseUrl = 'http://localhost:8080';

  constructor( private http: HttpClient ) { }

  getAllCompanies() {
    return this.http.get<EmpresaModel[]>(`${this.baseUrl}/empresas`);
  }

}
