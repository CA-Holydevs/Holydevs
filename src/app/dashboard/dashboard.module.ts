import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { TabViewModule } from 'primeng/tabview';

import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { DashboardComponent } from './dashboard.component';
import { NavigationTabsComponent } from './navigation-tabs/navigation-tabs.component';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardHeaderComponent,
    NavigationTabsComponent
  ],
  imports: [
    HttpClientModule,
    DialogModule,
    ButtonModule,
    TabViewModule
  ],
  providers: [],
  bootstrap: [ DashboardComponent ]
})
export class DashboardModule { }
