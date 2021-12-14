import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { VacantComponent } from './components/vacant/vacants/vacant.component';
import { MainComponent } from './components/main/main.component';
import { DialogContentComponent } from './components/shared/dialog-content/dialog-content.component';
import { AddVacantComponent } from './components/vacant/add-vacant/add-vacant.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VacantDetailComponent } from './components/vacant/vacant-detail/vacant-detail.component';
import { EditVacantComponent } from './components/vacant/edit-vacant/edit-vacant.component';
import { VacantCardComponent } from './components/vacant/vacant-card/vacant-card.component';


@NgModule({
  declarations: [
    AppComponent,
    VacantComponent,
    MainComponent,
    DialogContentComponent,
    AddVacantComponent,
    VacantDetailComponent,
    EditVacantComponent,
    VacantCardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
