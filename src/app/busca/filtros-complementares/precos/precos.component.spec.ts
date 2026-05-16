import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialog } from '@angular/material/dialog';

import { PrecosComponent } from './precos.component';

describe('PrecosComponent', () => {
  let component: PrecosComponent;
  let fixture: ComponentFixture<PrecosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrecosComponent],
      imports: [HttpClientTestingModule],
      providers: [{ provide: MatDialog, useValue: { open: jest.fn() } }],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(PrecosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
