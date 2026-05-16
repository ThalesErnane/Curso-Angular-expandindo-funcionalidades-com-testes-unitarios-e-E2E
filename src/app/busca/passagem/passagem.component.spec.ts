import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassagemComponent } from './passagem.component';

describe('PassagemComponent', () => {
  let component: PassagemComponent;
  let fixture: ComponentFixture<PassagemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PassagemComponent]
    });
    fixture = TestBed.createComponent(PassagemComponent);
    component = fixture.componentInstance;
    component.passagem = {
      tipo: 'Econômica',
      precoIda: 1000,
      precoVolta: 900,
      taxaEmbarque: 100,
      conexoes: 0,
      tempoVoo: 120,
      origem: { id: 1, nome: 'Sao Paulo', sigla: 'SP' },
      destino: { id: 2, nome: 'Rio de Janeiro', sigla: 'RJ' },
      companhia: { id: '1', nome: 'Companhia Teste' },
      dataIda: new Date('2026-01-10T10:00:00.000Z'),
      dataVolta: new Date('2026-01-20T10:00:00.000Z'),
      total: 2000,
      orcamento: []
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
