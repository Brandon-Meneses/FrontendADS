import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private baseUrl = 'http://localhost:8080/api/clientes'; // Cambia la URL según tu API

  // Datos mock para pruebas
  private mockClientes: Cliente[] = [
    { idCliente: 1, nombre: 'Juan Pérez', correo: 'juan.perez@example.com', direccion: 'Av. Siempre Viva 123', telefono: '987654321' },
  { idCliente: 2, nombre: 'María García', correo: 'maria.garcia@example.com', direccion: 'Calle Falsa 456', telefono: '987654322' },
  { idCliente: 3, nombre: 'Carlos Sánchez', correo: 'carlos.sanchez@example.com', direccion: 'Pasaje Sin Nombre 789', telefono: '987654323' },
  { idCliente: 4, nombre: 'Ana López', correo: 'ana.lopez@example.com', direccion: 'Jirón de la Unión 101', telefono: '987654324' },
  { idCliente: 5, nombre: 'Luis Rodríguez', correo: 'luis.rodriguez@example.com', direccion: 'Av. Abancay 202', telefono: '987654325' }
  ];

  constructor(private http: HttpClient) {}

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.baseUrl).pipe(
      catchError(error => {
        console.error('Error al obtener clientes del backend, usando datos mock', error);
        return of(this.mockClientes);
      })
    );
  }

  getCliente(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.baseUrl}/${id}`).pipe(
      catchError(error => {
        console.error('Error al obtener cliente del backend, usando datos mock', error);
        const mockCliente = this.mockClientes.find(cliente => cliente.idCliente === id);
        return of(mockCliente as Cliente);
      })
    );
  }

  createCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.baseUrl, cliente).pipe(
      catchError(this.handleError)
    );
  }

  updateCliente(id: number, cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.baseUrl}/${id}`, cliente).pipe(
      catchError(this.handleError)
    );
  }

  deleteCliente(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Ocurrió un error:', error);
    return throwError('Ocurrió un error al comunicarse con el backend.');
  }
}
