import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { dtoNuevaVenta } from '../interfaces/dtoVenta';

@Injectable({
  providedIn: 'root'
})
export class NuevaVentaService {


  private API_URL: string = environment.apiUrlBase;

  private _options = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'true' }),
  };

  constructor(private http: HttpClient) { }

  obtenerVentaRealizada(): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL+'/ventasRealizadas', this._options);
  }

  obtenerProductos(): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL+'/productos', this._options);
  }

  obtenerSabores(): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL+'/sabores', this._options);
  }

  registrarVenta(venta: dtoNuevaVenta):Observable<dtoNuevaVenta>{
    return this.http.post<dtoNuevaVenta>(this.API_URL,venta)
  }
  // registrarVenta(articulo: string, unidad: number, precio: number, subTotal: number) {
  //   const comando = {
  //     "articulo": articulo,
  //     "unidad": unidad,
  //     "precio": precio,
  //     "subTotal": subTotal
  //   };

  //   const headers = { 'content-type': 'application/json' }
  //   const body = JSON.stringify(comando);
  //   console.log(body);
  //   return this.http.post(this.API_URL, body, this._options);
  // }


}
