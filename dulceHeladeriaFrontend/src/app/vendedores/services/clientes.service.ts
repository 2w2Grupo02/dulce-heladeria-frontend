import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Cliente } from '../interfaces/cliente-interface';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }

  addCliente(cliente: Cliente) {
      //return this.http.post<any>('https://localhost:5001/api/Client',cliente); 
      return this.http.post<Cliente>('https://localhost:5001/api/Client',JSON.stringify(cliente));
    }

  create(cliente:Cliente): Observable<any>{
      return this.http.post<any>('https://localhost:5001/api/Client',cliente); 
  }
  }
