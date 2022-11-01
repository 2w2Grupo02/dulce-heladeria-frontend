import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UbicacionDeposito } from '../interfaces/ubicacion-deposito';

@Injectable({
  providedIn: 'root'
})
export class UbicacionDepositoService {

  constructor(private http: HttpClient) { }

  create(ubicacion : UbicacionDeposito): Observable<UbicacionDeposito> {
    return this.http.post<UbicacionDeposito>(
      'https://localhost:5001/api/Location',ubicacion
    );
  }
}
