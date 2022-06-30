import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-module',
  templateUrl: './card-module.component.html',
  styleUrls: ['./card-module.component.scss']
})
export class CardModuleComponent implements OnInit {

  @Input() cardTitle : string = '';
  @Input() cardDuration : string = '';
  @Input() moduleKey : String = '';

  constructor() { }

  ngOnInit(): void {
  }

}
