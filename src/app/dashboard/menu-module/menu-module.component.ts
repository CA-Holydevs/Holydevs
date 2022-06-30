import { Component, OnInit } from '@angular/core';

import { Module } from 'src/app/class/module';
import { ModuleService } from 'src/app/services/module.service';

@Component({
  selector: 'dashboard-menu-module',
  templateUrl: './menu-module.component.html',
  styleUrls: ['./menu-module.component.scss']
})
export class MenuModuleComponent implements OnInit {

  constructor( public moduleService: ModuleService  ) { }

  ngOnInit(): void {
  }

}
