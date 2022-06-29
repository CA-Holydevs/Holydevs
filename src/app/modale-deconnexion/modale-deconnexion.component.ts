import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-modale-deconnexion',
  templateUrl: './modale-deconnexion.component.html',
  styleUrls: ['./modale-deconnexion.component.scss']
})
export class ModaleDeconnexionComponent {

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  displayModal: boolean= false; 

  showModalDialog() {
      this.displayModal = true;
  }
}
