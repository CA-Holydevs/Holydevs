import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSessionComponent } from './menu-session.component';

describe('MenuSessionComponent', () => {
  let component: MenuSessionComponent;
  let fixture: ComponentFixture<MenuSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
