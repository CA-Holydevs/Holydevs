import { Component, OnInit } from '@angular/core';
// http://primefaces.org/primeng/tabview#p-tabpanel-19

@Component({
  selector: 'dashboard-navigation-tabs',
  templateUrl: './navigation-tabs.component.html',
  styleUrls: ['./navigation-tabs.component.scss']
})
export class NavigationTabsComponent {
  tabTitle1: string = "Header 1";
  tabTitle2: string[] = ["Header 2", "Header 3"];
}
