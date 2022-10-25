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

  registrarVenta(venta: dtoNuevaVenta):Observable<any>{
    return this.http.post<any>('https://localhost:4200/api/Vendedor',venta)
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
