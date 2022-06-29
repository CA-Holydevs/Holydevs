import { Component, OnInit } from '@angular/core';

import {Module} from "../class/module";
import {ModuleService} from "../services/module.service";




@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.scss']
})
export class ModuleListComponent implements OnInit {

  public module = new Module();

  constructor( public moduleService: ModuleService ) { }

  ngOnInit(): void {
    const modules = this.moduleService._module;
  }
  

}
