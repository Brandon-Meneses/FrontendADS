import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuarios: Usuario[] = [];
  selectedUsuario: Usuario | null = null;
  newUsuario: Usuario = { idUsuario: 0, nombre: '', correo: '', contrasena: '', rol: '' };

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios(): void {
    this.usuarioService.getUsuarios().subscribe(usuarios => this.usuarios = usuarios);
  }

  addUsuario(): void {
    this.usuarioService.addUsuario(this.newUsuario).subscribe(usuario => {
      this.usuarios.push(usuario);
      this.newUsuario = { idUsuario: 0, nombre: '', correo: '', contrasena: '', rol: '' };
    });
  }

  updateUsuario(): void {
    if (this.selectedUsuario) {
      this.usuarioService.updateUsuario(this.selectedUsuario).subscribe(() => {
        this.selectedUsuario = null;
        this.getUsuarios();
      });
    }
  }

  deleteUsuario(id: number): void {
    this.usuarioService.deleteUsuario(id).subscribe(() => {
      this.usuarios = this.usuarios.filter(usuario => usuario.idUsuario !== id);
    });
  }

  selectUsuario(usuario: Usuario): void {
    this.selectedUsuario = { ...usuario };
  }
}