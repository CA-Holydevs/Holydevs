import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss']
})
export class DashboardHeaderComponent implements OnInit {

  constructor(private primengConfig: PrimeNGConfig, private router: Router) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
  
  displayModal: boolean = false;
  displayProfile: boolean = false;
  isDisconnected: boolean = false;

  showModalDialog() {
      this.displayModal = true;
  }

  showProfile() {
    this.displayProfile = true;
  }

  deconnexion(){
    this.router.navigate(['/connexion'])
  }
}
