import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { VacantComponent } from './components/vacant/vacants/vacant.component';
import { MainComponent } from './components/main/main.component';
import { DialogContentComponent } from './components/dialog-content/dialog-content.component';
import { AddVacantComponent } from './components/vacant/add-vacant/add-vacant.component';


@NgModule({
  declarations: [
    AppComponent,
    VacantComponent,
    MainComponent,
    DialogContentComponent,
    AddVacantComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
