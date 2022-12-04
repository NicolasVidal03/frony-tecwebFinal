import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromTournamentsComponent } from './from-tournaments.component';

describe('FromTournamentsComponent', () => {
  let component: FromTournamentsComponent;
  let fixture: ComponentFixture<FromTournamentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromTournamentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FromTournamentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
