import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../services/pedido.service';
import { Pedido } from '../models/pedido';
import { MOCK_PEDIDOS } from '../mock-data/mock-pedidos';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  pedidos: Pedido[] = [];
  selectedPedido: Pedido | null = null;
  newPedido: Pedido = { idPedido: 0, idCliente: 0, idProducto: 0, cantidad: 0, fecha: new Date() };

  constructor(private pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.getPedidos();
  }

  getPedidos(): void {
    // Simulación de datos mock
    this.pedidos = MOCK_PEDIDOS;
  }

  addPedido(): void {
    this.pedidoService.addPedido(this.newPedido).subscribe(pedido => {
      this.pedidos.push(pedido);
      this.newPedido = { idPedido: 0, idCliente: 0, idProducto: 0, cantidad: 0, fecha: new Date() };
    });
  }

  updatePedido(): void {
    if (this.selectedPedido) {
      this.pedidoService.updatePedido(this.selectedPedido).subscribe(() => {
        this.selectedPedido = null;
        this.getPedidos();
      });
    }
  }

  deletePedido(id: number): void {
    this.pedidoService.deletePedido(id).subscribe(() => {
      this.pedidos = this.pedidos.filter(pedido => pedido.idPedido !== id);
    });
  }

  selectPedido(pedido: Pedido): void {
    this.selectedPedido = { ...pedido };
  }
}
