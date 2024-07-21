import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../models/cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  cliente: Cliente | undefined;

  constructor(
    private route: ActivatedRoute,
    private clienteService: ClienteService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.clienteService.getCliente(+id).subscribe(
        data => {
          this.cliente = data;
        },
        error => {
          console.error('Error al obtener el cliente:', error);
        }
      );
    }
  }
}
