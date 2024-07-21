import { Component, OnInit } from '@angular/core';
import { FacturaService } from '../services/factura.service';
import { Factura } from '../models/factura';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {
  facturas: Factura[] = [];
  selectedFactura: Factura | null = null;
  newFactura: Factura = { idFactura: 0, fechaEmision: new Date(), idVenta: 0 };

  constructor(private facturaService: FacturaService) { }

  ngOnInit(): void {
    this.getFacturas();
  }

  getFacturas(): void {
    this.facturaService.getFacturas().subscribe(facturas => this.facturas = facturas);
  }

  addFactura(): void {
    this.facturaService.addFactura(this.newFactura).subscribe(factura => {
      this.facturas.push(factura);
      this.newFactura = { idFactura: 0, fechaEmision: new Date(), idVenta: 0 };
    });
  }

  updateFactura(): void {
    if (this.selectedFactura) {
      this.facturaService.updateFactura(this.selectedFactura).subscribe(() => {
        this.selectedFactura = null;
        this.getFacturas();
      });
    }
  }

  deleteFactura(id: number): void {
    this.facturaService.deleteFactura(id).subscribe(() => {
      this.facturas = this.facturas.filter(factura => factura.idFactura !== id);
    });
  }

  selectFactura(factura: Factura): void {
    this.selectedFactura = { ...factura };
  }
}
