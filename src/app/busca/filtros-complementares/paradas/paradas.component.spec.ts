import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ParadasComponent } from './paradas.component';

describe('ParadasComponent', () => {
  let component: ParadasComponent;
  let fixture: ComponentFixture<ParadasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParadasComponent],
      providers: [{ provide: MatDialog, useValue: { open: jest.fn() } }],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(ParadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
