import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cliente } from '../../interfaces/cliente-interface';
import { ClientesService } from '../../services/clientes.service';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit, OnDestroy {

  buscador: string='';
  ResultClientes: Cliente[]=[];
  ResultBusqueda: Cliente[]=[];
  TiposIdentifiers: string[]=['','DNI','CUIT','CUIL']
  private sub: Subscription = new Subscription();
  constructor(private clientService:ClientesService) { }
  //{businessName: 'jere', identifierTypeId: 1, identifier:'65406546', homeAdress: 'ayacucho 545', email: 'jere@gmail.com'},
  //{businessName: 'juan', identifierTypeId: 2, identifier:'3210540', homeAdress: 'illia 87', email: 'juan@gmail.com'},
  //{businessName: 'jorge', identifierTypeId: 3, identifier:'87959454', homeAdress: 'san juan 1234', email: 'jorge@gmail.com'}
  ngOnInit(): void {
    this.cargarClientes();
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  buscarClientes(){
    console.log(this.buscador)
    this.ResultBusqueda = this.ResultClientes.filter((x:Cliente) => {
      return x.identifier?.includes(this.buscador);
  });
  }
  cargarClientes() {
    this.sub.add(this.clientService.getClientes().subscribe({
            next: (resp) => {
              console.log(resp);
              this.ResultClientes = resp;
            },
            error: (err) => {
              console.log(err);
            }
          })
    );
  }
  
}
