import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../models/cliente';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {
  clientes: Cliente[] = [];
  selectedCliente: Cliente | null = null;

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.getClientes();
  }

  getClientes(): void {
    this.clienteService.getClientes().subscribe(
      data => {
        this.clientes = data;
      },
      error => {
        console.error('Error al obtener clientes:', error);
      }
    );
  }

  selectCliente(cliente: Cliente): void {
    this.selectedCliente = { ...cliente };
  }

  updateCliente(): void {
    if (this.selectedCliente) {
      this.clienteService.updateCliente(this.selectedCliente.idCliente, this.selectedCliente).subscribe(
        () => {
          const index = this.clientes.findIndex(c => c.idCliente === this.selectedCliente!.idCliente);
          if (index !== -1 && this.selectedCliente) {
            this.clientes[index] = {
              idCliente: this.selectedCliente.idCliente,
              nombre: this.selectedCliente.nombre ?? '',
              correo: this.selectedCliente.correo ?? '',
              direccion: this.selectedCliente.direccion ?? '',
              telefono: this.selectedCliente.telefono ?? ''
            };
          }
          this.selectedCliente = null;
        },
        error => {
          console.error('Error al actualizar cliente:', error);
        }
      );
    }
  }

  deleteCliente(id: number): void {
    this.clienteService.deleteCliente(id).subscribe(
      () => {
        this.clientes = this.clientes.filter(cliente => cliente.idCliente !== id);
      },
      error => {
        console.error('Error al eliminar cliente:', error);
      }
    );
  }

  cancelEdit(): void {
    this.selectedCliente = null;
  }
}
