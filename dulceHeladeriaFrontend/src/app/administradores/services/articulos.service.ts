import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Articulo } from '../interfaces/articulo';
import { Articulos } from '../interfaces/articulos';

@Injectable({
  providedIn: 'root',
})
export class ArticulosService {
  constructor(private http: HttpClient) {}

  create(articulo: Articulo): Observable<Articulo> {
    return this.http.post<Articulo>(
      'https://localhost:5001/api/item',
      articulo
    );
  }
  getAll(): Observable<Articulos[]> {
    return this.http.get<Articulos[]>('https://localhost:5001/api/item');
  }
}
