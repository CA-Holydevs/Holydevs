import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { TabViewModule } from 'primeng/tabview';
import { RouterModule } from '@angular/router';

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
import { ModuleListComponent } from '../module-list/module-list.component';
import { CardModule } from 'primeng/card';
import { CardParticipantComponent } from '../card-participant/card-participant.component';
import { CardModuleComponent } from '../card-module/card-module.component';
import { CalenderComponent } from '../calender/calender.component';

import { CalendarModule, DateAdapter} from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardHeaderComponent,
    QRcodeComponent,
    MyAccountComponent,
    MenuModuleComponent,
    MenuSessionComponent,
    ModuleListComponent,
    CalenderComponent,
    CardParticipantComponent,
    CardModuleComponent,
    NavigationTabsComponent
  ],
  imports: [
    HttpClientModule,
    DialogModule,
    BrowserModule,
    RouterModule,
    ButtonModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    CardModule,
    TabViewModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    })
  ],
  providers: [ ],
  bootstrap: [ DashboardComponent ]
})
export class DashboardModule { }
