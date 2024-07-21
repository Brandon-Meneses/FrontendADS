import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../models/cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  cliente: Cliente | null = null;  // Inicializar como null
  isEditing: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.getCliente();
  }

  getCliente(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.clienteService.getCliente(id).subscribe(
      data => {
        this.cliente = data;
      },
      error => {
        console.error('Error al obtener cliente:', error);
      }
    );
  }

  editCliente(): void {
    this.isEditing = true;
  }

  updateCliente(): void {
    if (this.cliente) {
      this.clienteService.updateCliente(this.cliente.idCliente, this.cliente).subscribe(
        () => {
          this.isEditing = false;
          this.router.navigate(['/cliente-list']); // Redirigir a la lista de clientes después de la actualización
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
        this.router.navigate(['/cliente-list']); // Redirigir a la lista de clientes después de la eliminación
      },
      error => {
        console.error('Error al eliminar cliente:', error);
      }
    );
  }

  cancelEdit(): void {
    this.isEditing = false;
  }
}
