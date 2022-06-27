import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';

import { AccordionModule } from 'primeng/accordion';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';



@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent
  ],
  imports: [
    BrowserModule,
    CheckboxModule,
    ButtonModule,
    PanelModule,
    AccordionModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
