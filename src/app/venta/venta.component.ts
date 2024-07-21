import { Component, OnInit } from '@angular/core';
import { VentaService } from '../services/venta.service';
import { Venta } from '../models/venta';
import { MOCK_VENTAS } from '../mock-data/mock-ventas';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {
  ventas: Venta[] = [];
  selectedVenta: Venta | null = null;
  newVenta: Venta = { idVenta: 0, fecha: new Date(), total: 0, idUsuario: 0, idCliente: 0 };

  constructor(private ventaService: VentaService) { }

  ngOnInit(): void {
    this.getVentas();
  }

  getVentas(): void {
    // Simulación de datos mock
    this.ventas = MOCK_VENTAS;
  }

  addVenta(): void {
    this.ventaService.addVenta(this.newVenta).subscribe(venta => {
      this.ventas.push(venta);
      this.newVenta = { idVenta: 0, fecha: new Date(), total: 0, idUsuario: 0, idCliente: 0 };
    });
  }

  updateVenta(): void {
    if (this.selectedVenta) {
      this.ventaService.updateVenta(this.selectedVenta).subscribe(() => {
        this.selectedVenta = null;
        this.getVentas();
      });
    }
  }

  deleteVenta(id: number): void {
    this.ventaService.deleteVenta(id).subscribe(() => {
      this.ventas = this.ventas.filter(venta => venta.idVenta !== id);
    });
  }

  selectVenta(venta: Venta): void {
    this.selectedVenta = { ...venta };
  }
}
