import { Component, OnInit } from '@angular/core';

import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {map, switchMap} from "rxjs/operators";
import {ModuleService} from "../services/module.service";
import {Module} from "../class/module";

@Component({
  selector: 'app-info-module',
  templateUrl: './info-module.component.html',
  styleUrls: ['./info-module.component.scss']
})
export class InfoModuleComponent implements OnInit {

  moduleName : string;
  module : Module = new Module;
  intervenants : {name: string, role: string}[] = [];

  constructor(private route: ActivatedRoute,
    private router: Router,
    public moduleService: ModuleService) 
    { 
      this.moduleName = this.route.snapshot.paramMap.get('name') || '';
    }

  ngOnInit(): void {
    this.moduleName = this.route.snapshot.paramMap.get('name') || '';
    this.module = this.moduleService.getModule(this.moduleName);
    this.intervenants = this.module.intervenantList as {name: string, role: string}[];
  }

}
