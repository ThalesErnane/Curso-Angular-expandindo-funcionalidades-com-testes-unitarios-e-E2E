import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialog } from '@angular/material/dialog';

import { FormBuscaComponent } from './form-busca.component';

describe('FormBuscaComponent', () => {
  let component: FormBuscaComponent;
  let fixture: ComponentFixture<FormBuscaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormBuscaComponent],
      imports: [HttpClientTestingModule],
      providers: [{ provide: MatDialog, useValue: { open: jest.fn() } }],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(FormBuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
