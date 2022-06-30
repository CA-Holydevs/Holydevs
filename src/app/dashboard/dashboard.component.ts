import { Component } from '@angular/core';

@Component({
  selector: 'dashboard-root',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  title = 'Holydevs - Dashboard';
  displaySessions: boolean = true;
}