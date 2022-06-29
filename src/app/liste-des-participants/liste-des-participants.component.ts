import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-liste-des-participants',
  templateUrl: './liste-des-participants.component.html',
  styleUrls: ['./liste-des-participants.component.scss']
})
export class ListeDesParticipantsComponent implements OnInit {

  studentsList = [
      {
          name: 'Eleve 1',
          signature : false
      },{
        name: 'Eleve 2',
        signature : false
      },{
        name: 'Eleve 3',
        signature : false
      }
    ];
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  mail(content: any): void {
    this.modalService.open(content)
  }

  absent(content2: any): void {
    this.modalService.open(content2)
  }

}
