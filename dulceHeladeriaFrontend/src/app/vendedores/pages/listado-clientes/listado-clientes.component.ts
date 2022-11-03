import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cliente } from '../../interfaces/cliente-interface';
import { ClientesService } from '../../services/clientes.service';

declare var window:any;
@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit, OnDestroy {
  formNuevo:any;
  buscador: string='';
  ResultClientes: Cliente[]=[{businessName: 'jere', identifierTypeId: 1, identifier:'65406546', homeAdress: 'ayacucho 545', email: 'jere@gmail.com'},
  {businessName: 'juan', identifierTypeId: 2, identifier:'3210540', homeAdress: 'illia 87', email: 'juan@gmail.com'},
  {businessName: 'jorge', identifierTypeId: 3, identifier:'87959454', homeAdress: 'san juan 1234', email: 'jorge@gmail.com'}];
  ResultBusqueda: Cliente[]=[];
  TiposIdentifiers: string[]=['','DNI','CUIT','CUIL']
  cliente: Cliente;
  private sub: Subscription = new Subscription();

  constructor(private clientService:ClientesService) { }

  nuevoClienteForm = new FormGroup({
    businessName: new FormControl('', Validators.required),
    identifierTypeId: new FormControl('1', Validators.required),
    identifier: new FormControl('', Validators.required),
    homeAdress: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required])
  });

  ngOnInit(): void {
    this.formNuevo = new window.bootstrap.Modal(
      document.getElementById("NuevoCliente")
    );
    this.cargarClientes();
    this.buscarClientes();
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  openNuevoCliente(){
    this.formNuevo.show();
  }
  closeNuevoCliente(){
    this.formNuevo.hide();
  }
  buscarClientes(){
    console.log(this.buscador)
    this.ResultBusqueda = this.ResultClientes.filter((x:Cliente) => {
      return x.identifier?.includes(this.buscador);
  });
  }
  registrarCliente(){
    if(this.nuevoClienteForm.valid){
      this.cliente = this.nuevoClienteForm.value as Cliente;
      if(this.nuevoClienteForm.controls.identifierTypeId.value){
          this.cliente.identifierTypeId = parseInt(this.nuevoClienteForm.controls.identifierTypeId.value)
      }
      console.log(this.cliente);
      console.log(JSON.stringify(this.cliente));
      this.sub.add(
        this.clientService.create(this.cliente)
        .subscribe({
          error : () => {alert("error al registrar al cliente")}
        }
      ))
    }
    
    this.closeNuevoCliente();
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
