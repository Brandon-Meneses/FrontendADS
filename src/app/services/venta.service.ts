import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Venta } from '../models/venta';

@Injectable({
  providedIn: 'root'
})
export class VentaService {
  private apiUrl = 'http://api.url/ventas'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) { }

  getVentas(): Observable<Venta[]> {
    return this.http.get<Venta[]>(this.apiUrl);
  }

  addVenta(venta: Venta): Observable<Venta> {
    return this.http.post<Venta>(this.apiUrl, venta);
  }

  updateVenta(venta: Venta): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${venta.idVenta}`, venta);
  }

  deleteVenta(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
