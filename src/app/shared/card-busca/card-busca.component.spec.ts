import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CardBuscaComponent } from './card-busca.component';

describe('CardBuscaComponent', () => {
  let component: CardBuscaComponent;
  let fixture: ComponentFixture<CardBuscaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardBuscaComponent],
      imports: [RouterTestingModule]
    });
    fixture = TestBed.createComponent(CardBuscaComponent);
    component = fixture.componentInstance;
    component.promocao = {
      id: 1,
      destino: 'Rio de Janeiro',
      imagem: 'imagem.png',
      preco: 1000
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
