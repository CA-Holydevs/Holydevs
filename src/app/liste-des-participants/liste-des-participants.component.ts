import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SignaturePad } from 'angular2-signaturepad';

@Component({
  selector: 'app-liste-des-participants',
  templateUrl: './liste-des-participants.component.html',
  styleUrls: ['./liste-des-participants.component.scss'],
  template: '<signature-pad [options]="signaturePadOptions" (onBeginEvent)="drawStart()" (onEndEvent)="drawComplete()"></signature-pad>'
})
export class ListeDesParticipantsComponent implements OnInit {

  displayModal: boolean = false;
  studentName: string = "";
  studentId: number = 0;
  isSignatureEmpty: boolean = true;

  signatureImg: string | undefined;
  @ViewChild(SignaturePad) signaturePad!: SignaturePad;
  signaturePadOptions: Object = { 
    'minWidth': 2,
    'canvasWidth': 430,
    'canvasHeight': 300,
    'canvasStyle': {
      'border': '1px solid red',
      'borderRadius': '5px'
    }
  };

  studentsList = [
    {
      id: 1,
      name: 'Elisa Durand',
      comment:"Absent à ce jour",
      etat:"Absent",
      signatureImg: ""
    },{
      id: 2,
      name: 'Pierre Richard',
      comment:"",
      etat:"Waiting",
      signatureImg: ""
    },{
      id: 3,
      name: 'Sarah Blanc',
      comment:"",
      etat:"Waiting",
      signatureImg: ""
    },{
      id: 4,
      name: 'Nathan Martin',
      comment:"",
      etat:"Waiting",
      signatureImg: ""
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

  showDialog(id:number, name:string) {
    this.displayModal = true;
    this.studentName = name;
    this.studentId = id-1;
  }
  closeDialog() {
    this.displayModal = false;
    this.clearSignature();
  }

  ngAfterViewInit() {
    this.signaturePad.set('minWidth', 2); 
    this.signaturePad.clear(); 
  }

  drawComplete() {
    console.log(this.signaturePad.toDataURL());
  }

  drawStart() {
    console.log('begin drawing');
    this.isSignatureEmpty = false;
  }

  clearSignature() {
    this.signaturePad.clear();
    this.isSignatureEmpty = true;
  }

  savePad(id: number) {
    if(!this.isSignatureEmpty) {
      const base64Data = this.signaturePad.toDataURL();
      this.signatureImg = base64Data;
      this.signaturePad.clear();
      this.displayModal = false;
      this.studentsList[id].etat = "Present";
      this.studentsList[id].signatureImg = base64Data;
    }
  }

}
