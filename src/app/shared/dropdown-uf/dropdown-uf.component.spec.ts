import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormControl } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { DropdownUfComponent } from './dropdown-uf.component';

describe('DropdownUfComponent', () => {
  let component: DropdownUfComponent;
  let fixture: ComponentFixture<DropdownUfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownUfComponent],
      imports: [HttpClientTestingModule, MatAutocompleteModule],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(DropdownUfComponent);
    component = fixture.componentInstance;
    component.control = new FormControl('');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
