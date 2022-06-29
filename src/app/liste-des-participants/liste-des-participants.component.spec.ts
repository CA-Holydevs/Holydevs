import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDesParticipantsComponent } from './liste-des-participants.component';

describe('ListeDesParticipantsComponent', () => {
  let component: ListeDesParticipantsComponent;
  let fixture: ComponentFixture<ListeDesParticipantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDesParticipantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDesParticipantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
