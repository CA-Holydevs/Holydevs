import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {
  msg : string = "";
  constructor() {
  }

  ngOnInit(): void {
  }

  validation() {
    this.msg="Modification validé !";
    return this.msg;
  }

}
