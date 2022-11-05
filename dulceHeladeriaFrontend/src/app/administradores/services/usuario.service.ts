import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { usuario } from '../interfaces/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url: string = environment.userUrl; 

  constructor(private http:HttpClient) { }

  create(usuario:usuario): Observable<any>{
    return this.http.post<any>('https://localhost:5001/api/User/Register',usuario); 
  }
}
