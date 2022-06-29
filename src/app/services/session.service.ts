import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Session } from '../class/session';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  public _session: Map<String, Session>;
  private _url: string = "/assets/data/session.json";


  constructor( private http: HttpClient ) { 
    this._session = new Map<String, Session>();
    this.http.get<any>(this._url).subscribe(datas => {
      datas.forEach((data : any) => {
        const session = data as Session;
        this.updateFromJSON(session);
        console.log(this._session);
      });
    })
  }

  public updateFromJSON(session: Session){
    const newSession = new Session();
    newSession.setSession(session);
    const existSession = this._session.get(newSession.id);
    if(!existSession){
      this._session.set(newSession.id, newSession);
    }
  }
}
