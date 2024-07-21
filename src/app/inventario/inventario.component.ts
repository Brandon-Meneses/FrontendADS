import { Component, OnInit } from '@angular/core';
import { InventarioService } from '../services/inventario.service';
import { Inventario } from '../models/inventario';
import { MOCK_INVENTARIOS } from '../mock-data/mock-inventarios';


@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {
  inventarios: Inventario[] = [];
  selectedInventario: Inventario | null = null;
  newInventario: Inventario = { idInventario: 0, fechaActualizacion: new Date(), idProducto: 0, cantidad: 0 };

  constructor(private inventarioService: InventarioService) { }

  ngOnInit(): void {
    this.getInventarios();
  }

  getInventarios(): void {
    // Simulación de datos mock
    this.inventarios = MOCK_INVENTARIOS;
  }

  addInventario(): void {
    this.inventarioService.addInventario(this.newInventario).subscribe(inventario => {
      this.inventarios.push(inventario);
      this.newInventario = { idInventario: 0, fechaActualizacion: new Date(), idProducto: 0, cantidad: 0 };
    });
  }

  updateInventario(): void {
    if (this.selectedInventario) {
      this.inventarioService.updateInventario(this.selectedInventario).subscribe(() => {
        this.selectedInventario = null;
        this.getInventarios();
      });
    }
  }

  deleteInventario(id: number): void {
    this.inventarioService.deleteInventario(id).subscribe(() => {
      this.inventarios = this.inventarios.filter(inventario => inventario.idInventario !== id);
    });
  }

  selectInventario(inventario: Inventario): void {
    this.selectedInventario = { ...inventario };
  }
}
