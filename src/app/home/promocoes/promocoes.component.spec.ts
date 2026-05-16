import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PromocoesComponent } from './promocoes.component';

describe('PromocoesComponent', () => {
  let component: PromocoesComponent;
  let fixture: ComponentFixture<PromocoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromocoesComponent],
      imports: [HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(PromocoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
