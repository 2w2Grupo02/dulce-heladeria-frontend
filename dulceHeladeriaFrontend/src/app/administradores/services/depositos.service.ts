import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Deposito } from '../interfaces/deposito';

@Injectable({
  providedIn: 'root'
})
export class DepositosService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Deposito[]> {
    return this.http.get<Deposito[]>('https://localhost:5001/api/deposit');
  }
}
