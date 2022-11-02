import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { range } from '../interfaces/range';
import { ventaPorDia } from '../interfaces/ventaPordia';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  constructor(private http:HttpClient) { }

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      withCredentials: 'true',
      Authorization: 'my-auth-token'
    })
  };

  getAllVenta(range:range) {
    return this.http.post<any[]>('https://localhost:44350/range',range, this.httpOptions);
  }

}

