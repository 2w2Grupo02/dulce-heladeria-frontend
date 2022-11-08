import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovimientosService {

  
  private jwt: string =localStorage.getItem('token')!

  private _options = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'true', 'Authorization' : 'Bearer '+ this.jwt }),
  };


  constructor(private http:HttpClient) { }

  getMovimietos() {
    return this.http.get<Articulos[]>('https://localhost:5001/api/item', this._options);
  }

}
