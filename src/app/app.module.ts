import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/** PrimeNG imports */
import { AccordionModule } from 'primeng/accordion';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SignaturePadModule } from 'angular2-signaturepad';


/* Aplication components */
import { ConnexionComponent } from './connexion/connexion.component';
import { FirstConnexionComponent } from './first-connexion/first-connexion.component';
import { SocialLinksComponent } from './social-links/social-links.component';
import { CardModuleComponent } from './card-module/card-module.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
/* Aplication modules */
import { DashboardModule } from './dashboard/dashboard.module';
import { ListeDesParticipantsComponent } from './liste-des-participants/liste-des-participants.component';
import { SignatureComponent } from './signature/signature.component';
import { InfoModuleComponent } from './info-module/info-module.component';
import { ModaleDeconnexionComponent } from './modale-deconnexion/modale-deconnexion.component';
import { NavigationTabsModule } from './dashboard/navigation-tabs/navigation-tabs.module';

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    FirstConnexionComponent,
    SocialLinksComponent,
    ListeDesParticipantsComponent,
    SignatureComponent,
    InfoModuleComponent,
    ModaleDeconnexionComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    CheckboxModule,
    ButtonModule,
    PanelModule,
    AccordionModule,
    ReactiveFormsModule,
    DialogModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DialogModule,
    SignaturePadModule,
    CommonModule,
    NavigationTabsModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
