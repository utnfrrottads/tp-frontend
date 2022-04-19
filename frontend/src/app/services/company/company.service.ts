import { EmpresaModel } from './../../models/empresa-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  readonly baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  getAllCompanies() {
    return this.http.get<EmpresaModel[]>(`${this.baseUrl}/empresas`);
  }

}
