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
  displayedColumns: string[] = ['nombre', 'correo', 'direccion', 'telefono', 'acciones'];

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(
      data => {
        this.clientes = data;
      },
      error => {
        console.error('Error al obtener clientes:', error);
      }
    );
  }
}
