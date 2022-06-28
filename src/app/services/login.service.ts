import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataLogin } from '../login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _url: string = "/assets/data/login-pswd.json"

  constructor(private http: HttpClient) { }

  getLogins(): Observable<DataLogin[]>{
    return this.http.get<DataLogin[]>(this._url);
  }
 
}
