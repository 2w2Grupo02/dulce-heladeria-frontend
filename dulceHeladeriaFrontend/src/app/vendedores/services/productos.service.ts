import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { productoResponse } from '../interfaces/productoResponse';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }
  getProductos(): Observable<productoResponse[]> {
    return this.http.get<productoResponse[]>(`https://localhost:5001/api/product/available`);
  }
}
