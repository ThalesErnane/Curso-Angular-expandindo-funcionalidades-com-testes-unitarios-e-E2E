import { Component } from '@angular/core';
import { ModalCancelarPedidoComponent } from './modal-cancelar-pedido/modal-cancelar-pedido.component';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { Reserva } from '../core/types/type';
import { PedidosService } from './pedidos.service';
@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent {
  pedidos$?: Observable<Reserva[]> = this.pedidosService.getPedidos();

  constructor(
    private dialog: MatDialog,
    private pedidosService: PedidosService
  ) { }

  onCancelarPedido(id: number): void {
    const dialogRef = this.dialog.open(ModalCancelarPedidoComponent, {
      width: '400px',
      data: { id }
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('the dialog was closed');
    });
  }
}
