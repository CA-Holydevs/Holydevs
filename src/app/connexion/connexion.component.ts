import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { DataLogin } from '../login';
import { NgForm } from '@angular/forms';
import {  VERSION, ViewChild, ElementRef,  } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  public logins: DataLogin[] = [];
  public wrongPassword : boolean = false;
  public rightPassword : boolean = false;
  
  mail = new FormControl();
  password = new FormControl();

  constructor(private _loginsService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this._loginsService.getLogins().subscribe(data => (this.logins = data));
    
  }

  isInLogins(user:string, pswd:string): boolean{
    for(let i=0; i< this.logins.length; i++ ){
      if(this.logins[i].login == user && this.logins[i].password == pswd){
        return true
      }
    }
    return false;
  }

  identification(){
    if(this.isInLogins(this.mail.value, this.password.value)){
      this.rightPassword = true;
      this.wrongPassword = false;
      this.router.navigate(['/dashboard']);
    }else{
      this.rightPassword = false;
      this.wrongPassword = true;
    }
  }

}
