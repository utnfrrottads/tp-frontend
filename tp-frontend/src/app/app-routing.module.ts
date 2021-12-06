import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { VacantComponent } from './components/vacant/vacants/vacant.component';
import { AddVacantComponent } from './components/vacant/add-vacant/add-vacant.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  {
    path: 'main', component: MainComponent,
    children: [
      { path: 'vacantes', component: VacantComponent },
      { path: 'vacantes/nueva-vacante', component: AddVacantComponent }
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: 'main' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
