import { Pedido } from '../models/pedido';

export const MOCK_PEDIDOS: Pedido[] = [
  { idPedido: 1, idCliente: 101, idProducto: 1001, cantidad: 10, fecha: new Date('2023-01-01') },
  { idPedido: 2, idCliente: 102, idProducto: 1002, cantidad: 5, fecha: new Date('2023-01-02') },
  { idPedido: 3, idCliente: 103, idProducto: 1003, cantidad: 15, fecha: new Date('2023-01-03') },
  { idPedido: 4, idCliente: 104, idProducto: 1004, cantidad: 20, fecha: new Date('2023-01-04') },
  { idPedido: 5, idCliente: 105, idProducto: 1005, cantidad: 25, fecha: new Date('2023-01-05') },
];
