import { VacantService } from './../../../services/vacant/vacant.service';
import { VacanteModel } from './../../../models/vacante-model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vacant-detail',
  templateUrl: './vacant-detail.component.html',
  styleUrls: ['./vacant-detail.component.css']
})
export class VacantDetailComponent implements OnInit {
  displayedColumns: string[] = ['Nro','Descripción del requerimiento'];

  vacant!: VacanteModel;
  loading: boolean = false;

  constructor( private activatedroute: ActivatedRoute, private vacantService: VacantService ) { }

  ngOnInit(): void {
    this.loading = true;
    this.loadVacantDetail();
  }
  

  loadVacantDetail() {
    const id = this.activatedroute.snapshot.paramMap.get('id');

    if ( !id ) {
      return;
    };

    const id_vacant = parseInt(id, 10);

    this.vacantService.getVacantById( id_vacant ).subscribe(
      res => {
        this.vacant = res;
        this.loading = false;
      },
      err => console.error(err));
  };

}
