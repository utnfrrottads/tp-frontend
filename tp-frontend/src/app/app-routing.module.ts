import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { VacantComponent } from './components/vacant/vacants/vacant.component';
import { AddVacantComponent } from './components/vacant/add-vacant/add-vacant.component';
import { VacantDetailComponent } from './components/vacant/vacant-detail/vacant-detail.component';
import { EditVacantComponent } from './components/vacant/edit-vacant/edit-vacant.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  {
    path: 'main', component: MainComponent,
    children: [
      { path: 'vacantes', component: VacantComponent },
      { path: 'vacante/:id', component: VacantDetailComponent },
      { path: 'vacantes/nueva-vacante', component: AddVacantComponent },
      { path: 'vacantes/editar-vacante/:id', component: EditVacantComponent },
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: 'main' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
