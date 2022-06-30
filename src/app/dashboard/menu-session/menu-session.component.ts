import { Component, OnInit } from '@angular/core';
import {SessionService} from "../../services/session.service";

@Component({
  selector: 'dashboard-menu-session',
  templateUrl: './menu-session.component.html',
  styleUrls: ['./menu-session.component.scss']
})
export class MenuSessionComponent implements OnInit {

  constructor( public sessionService: SessionService ) { }

  ngOnInit(): void {
  }

}
