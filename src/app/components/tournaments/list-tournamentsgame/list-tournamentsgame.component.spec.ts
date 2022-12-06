import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTournamentsgameComponent } from './list-tournamentsgame.component';

describe('ListTournamentsgameComponent', () => {
  let component: ListTournamentsgameComponent;
  let fixture: ComponentFixture<ListTournamentsgameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTournamentsgameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTournamentsgameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
