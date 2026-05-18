import { PedidosService } from './pedidos.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalCancelarPedidoComponent } from './modal-cancelar-pedido/modal-cancelar-pedido.component';
import { Reserva } from '../core/types/type';
import { Observable, catchError, of } from 'rxjs';
import { MensagemService } from '../core/services/mesagem.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {

  pedidos$?: Observable<Reserva[]>;
  erro: string | null = null;

  ngOnInit(): void {
    this.pedidos$ = this.pedidosService.getPedidos().pipe(
      catchError(err => {
        console.error('Erro ao buscar pedidos:', err);
        this.erro = 'Não foi possível carregar os pedidos. Verifique se o servidor está ativo.';
        return of([]);
      })
    );
  }

  constructor(
    private dialog: MatDialog,
    private pedidosService: PedidosService,
    private messagemService: MensagemService
  ) {}

  onCancelarPedido(id: number | undefined): void {
    const dialogRef = this.dialog.open(ModalCancelarPedidoComponent, {
      width: '400px',
      data: {id}
    });

    dialogRef.afterClosed().subscribe(id => {
      if (id) {
        this.pedidosService.removerPedido(id)
          .subscribe(() => {
            this.messagemService.openMessage('Pedido removido com sucesso!');
          });
      }
    });
  }

}