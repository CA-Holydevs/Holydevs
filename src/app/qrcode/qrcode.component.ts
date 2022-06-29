import { Component, OnInit } from '@angular/core';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.scss']
})


export class QRcodeComponent implements OnInit {


  constructor(private modalService: NgbModal) {}

  open(content: any) {
    this.modalService.open(content)
  }
  
  ngOnInit(): void {
  }
  
};

