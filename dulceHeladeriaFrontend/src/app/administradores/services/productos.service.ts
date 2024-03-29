import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoRequest } from '../interfaces/productoRequest';
import { productoResponse } from '../interfaces/productoResponse';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  private jwt: string =localStorage.getItem('token')!

  private _options = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'true', 'Authorization' : 'Bearer '+ this.jwt }),
  };
  getProductos(): Observable<productoResponse[]> {
    return this.http.get<productoResponse[]>(`https://localhost:5001/api/product`, this._options);
  }
  create(producto: ProductoRequest): Observable<any> {
    return this.http.post<any>(`https://localhost:5001/api/product`,producto, this._options);
  }
  getProductoById(id: number): Observable<ProductoRequest> {
    return this.http.get<ProductoRequest>(`https://localhost:5001/api/product/${id}`, this._options);
  }
  updateProducto(id: number, producto: ProductoRequest ): Observable<any> {
    return this.http.put(`https://localhost:5001/api/product/${id}`,producto, this._options);
  }
}
