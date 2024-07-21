import { Inventario } from '../models/inventario';

export const MOCK_INVENTARIOS: Inventario[] = [
  { idInventario: 1, fechaActualizacion: new Date('2023-01-01'), idProducto: 1001, cantidad: 100 },
  { idInventario: 2, fechaActualizacion: new Date('2023-01-02'), idProducto: 1002, cantidad: 200 },
  { idInventario: 3, fechaActualizacion: new Date('2023-01-03'), idProducto: 1003, cantidad: 300 },
  { idInventario: 4, fechaActualizacion: new Date('2023-01-04'), idProducto: 1004, cantidad: 400 },
  { idInventario: 5, fechaActualizacion: new Date('2023-01-05'), idProducto: 1005, cantidad: 500 },
];
