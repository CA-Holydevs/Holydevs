import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { TabViewModule } from 'primeng/tabview';

import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { DashboardComponent } from './dashboard.component';
import { NavigationTabsComponent } from './navigation-tabs/navigation-tabs.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { QRcodeComponent } from './qrcode/qrcode.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { MenuModuleComponent } from './menu-module/menu-module.component';
import { MenuSessionComponent } from './menu-session/menu-session.component';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardHeaderComponent,
    QRcodeComponent,
    MyAccountComponent,
    MenuModuleComponent,
    MenuSessionComponent,
    NavigationTabsComponent
  ],
  imports: [
    HttpClientModule,
    DialogModule,
    BrowserModule,
    ButtonModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    TabViewModule
  ],
  providers: [],
  bootstrap: [ DashboardComponent ]
})
export class DashboardModule { }
