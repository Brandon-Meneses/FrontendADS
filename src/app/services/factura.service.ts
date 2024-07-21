import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Factura } from '../models/factura';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {
  private apiUrl = 'http://api.url/facturas'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) { }

  getFacturas(): Observable<Factura[]> {
    return this.http.get<Factura[]>(this.apiUrl);
  }

  addFactura(factura: Factura): Observable<Factura> {
    return this.http.post<Factura>(this.apiUrl, factura);
  }

  updateFactura(factura: Factura): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${factura.idFactura}`, factura);
  }

  deleteFactura(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
