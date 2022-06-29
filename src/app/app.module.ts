import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/** PrimeNG imports */
import { AccordionModule } from 'primeng/accordion';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { CardModule } from 'primeng/card';
import { CalendarModule } from "primeng/calendar";
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


/* Aplication components */
import { ConnexionComponent } from './connexion/connexion.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { FirstConnexionComponent } from './first-connexion/first-connexion.component';
import { StructPrincipaleComponent } from './struct-principale/struct-principale.component';
import { CardParticipantComponent } from './card-participant/card-participant.component';
import { HttpClientModule } from '@angular/common/http';
import { CalenderComponent } from './calender/calender.component';
import { ReactiveFormsModule } from '@angular/forms';
/* Aplication modules */
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    ModuleListComponent,
    FirstConnexionComponent,
    StructPrincipaleComponent,
    CardParticipantComponent,
    CalenderComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    CheckboxModule,
    ButtonModule,
    PanelModule,
    AccordionModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DialogModule,
    CardModule,
    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
