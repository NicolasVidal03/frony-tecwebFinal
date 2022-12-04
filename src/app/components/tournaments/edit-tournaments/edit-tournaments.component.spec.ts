import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTournamentsComponent } from './edit-tournaments.component';

describe('EditTournamentsComponent', () => {
  let component: EditTournamentsComponent;
  let fixture: ComponentFixture<EditTournamentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTournamentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTournamentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
