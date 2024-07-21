import { Usuario } from '../models/usuario';
export const MOCK_USUARIOS: Usuario[] = [
    { idUsuario: 1, nombre: 'Juan Pérez', correo: 'juan.perez@example.com', contrasena: 'password123', rol: 'Admin' },
    { idUsuario: 2, nombre: 'María García', correo: 'maria.garcia@example.com', contrasena: 'password123', rol: 'User' },
    { idUsuario: 3, nombre: 'Carlos Sánchez', correo: 'carlos.sanchez@example.com', contrasena: 'password123', rol: 'User' },
    { idUsuario: 4, nombre: 'Ana López', correo: 'ana.lopez@example.com', contrasena: 'password123', rol: 'Admin' },
    { idUsuario: 5, nombre: 'Luis Rodríguez', correo: 'luis.rodriguez@example.com', contrasena: 'password123', rol: 'User' },
  ];