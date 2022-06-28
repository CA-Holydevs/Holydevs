import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Module } from '../class/module';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  public _module: Map<String, Module>;
  private _url: string = "/assets/data/module.json";


  constructor( private http: HttpClient ) { 
    this._module = new Map<String, Module>();
    this.http.get<any>(this._url).subscribe(datas => {
      datas.forEach((data : any) => {
        const module = data as Module;
        this.updateFromJSON(module);
        console.log(this._module);
      });
    })
  }

  public updateFromJSON(module: Module){
    const newModule = new Module();
    newModule.setModule(module);
    const existModule = this._module.get(newModule.name);
    if(!existModule){
      this._module.set(newModule.name, newModule);
    }
  }
}
