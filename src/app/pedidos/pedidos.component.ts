import { Component } from '@angular/core';
import { ModalCancelarPedidoComponent } from './modal-cancelar-pedido/modal-cancelar-pedido.component';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';

interface Pedido {
  id: number;
  dataIda: string;
  dataVolta: string;
  origem: string;
  adultos: number;
  valorFinal: number;
}

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent {
  pedidos$: Observable<Pedido[]> = of([
    {
      id: 1,
      dataIda: '23/09/2025',
      dataVolta: '30/09/2025',
      origem: 'Rio Branco',
      adultos: 3,
      valorFinal: 3769,
    },
  ]);

  constructor(
    private dialog: MatDialog
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
