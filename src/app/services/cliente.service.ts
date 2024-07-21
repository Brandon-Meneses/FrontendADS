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
    { idCliente: 1, nombre: 'Cliente 1', correo: 'cliente1@example.com', direccion: 'Dirección 1', telefono: '1234567890' },
    { idCliente: 2, nombre: 'Cliente 2', correo: 'cliente2@example.com', direccion: 'Dirección 2', telefono: '0987654321' }
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
