import { Factura } from '../models/factura';

export const MOCK_FACTURAS: Factura[] = [
  { idFactura: 1, fechaEmision: new Date('2023-01-01'), idVenta: 10001 },
  { idFactura: 2, fechaEmision: new Date('2023-01-02'), idVenta: 10002 },
  { idFactura: 3, fechaEmision: new Date('2023-01-03'), idVenta: 10003 },
  { idFactura: 4, fechaEmision: new Date('2023-01-04'), idVenta: 10004 },
  { idFactura: 5, fechaEmision: new Date('2023-01-05'), idVenta: 10005 },
];
