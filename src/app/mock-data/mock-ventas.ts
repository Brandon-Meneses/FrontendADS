import { Venta } from '../models/venta';

export const MOCK_VENTAS: Venta[] = [
  { idVenta: 10001, fecha: new Date('2023-01-01'), total: 100.0, idUsuario: 201, idCliente: 101 },
  { idVenta: 10002, fecha: new Date('2023-01-02'), total: 200.0, idUsuario: 202, idCliente: 102 },
  { idVenta: 10003, fecha: new Date('2023-01-03'), total: 300.0, idUsuario: 203, idCliente: 103 },
  { idVenta: 10004, fecha: new Date('2023-01-04'), total: 400.0, idUsuario: 204, idCliente: 104 },
  { idVenta: 10005, fecha: new Date('2023-01-05'), total: 500.0, idUsuario: 205, idCliente: 105 },
];
