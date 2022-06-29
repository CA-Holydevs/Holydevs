import { Component, HostBinding, OnInit } from '@angular/core';
import { ModaleDeconnexionComponent } from 'src/app/modale-deconnexion/modale-deconnexion.component';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss']
})
export class DashboardHeaderComponent implements OnInit {

  constructor(private primengConfig: PrimeNGConfig, private router: Router) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  displayModal: boolean= false; 

  showModalDialog() {
      this.displayModal = true;
  }

  deconnexion(){
    this.router.navigate(['/connexion']);
  }

}
