import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaleDeconnexionComponent } from './modale-deconnexion.component';

describe('ModaleDeconnexionComponent', () => {
  let component: ModaleDeconnexionComponent;
  let fixture: ComponentFixture<ModaleDeconnexionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModaleDeconnexionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaleDeconnexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
