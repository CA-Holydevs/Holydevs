import { Component, OnInit } from '@angular/core';

import {Module} from "../class/module";
import {ModuleService} from "../services/module.service";

@Component({
  selector: 'app-menu-module',
  templateUrl: './menu-module.component.html',
  styleUrls: ['./menu-module.component.scss']
})
export class MenuModuleComponent implements OnInit {

  constructor( public moduleService: ModuleService  ) { }

  ngOnInit(): void {
  }

}
