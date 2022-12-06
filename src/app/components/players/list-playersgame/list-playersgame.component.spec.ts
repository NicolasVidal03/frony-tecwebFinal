import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPlayersgameComponent } from './list-playersgame.component';

describe('ListPlayersgameComponent', () => {
  let component: ListPlayersgameComponent;
  let fixture: ComponentFixture<ListPlayersgameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPlayersgameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPlayersgameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
