import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructPrincipaleComponent } from './struct-principale.component';

describe('StructPrincipaleComponent', () => {
  let component: StructPrincipaleComponent;
  let fixture: ComponentFixture<StructPrincipaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructPrincipaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StructPrincipaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
