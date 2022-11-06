import { ThisReceiver } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import swal from 'sweetalert2';
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
  ResultClientes: Cliente[];
  ResultBusqueda: Cliente[]=[];
  TiposIdentifiers: string[]=['','DNI','CUIT','CUIL']
  cliente: Cliente;
  private sub: Subscription = new Subscription();

  constructor(private clientService:ClientesService) { }

  nuevoClienteForm = new FormGroup({
    businessName: new FormControl('', Validators.required),
    identifierTypeId: new FormControl('1', Validators.required),
    identifier: new FormControl('', [Validators.required,Validators.pattern("^[0-9]*$")]),
    homeAdress: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required])
  });
  busquedaForm = new FormGroup({
    businessName: new FormControl(''),
    identifier: new FormControl(''),
    homeAdress: new FormControl(''),
    email: new FormControl('')
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
    this.cliente={} as Cliente;
  }
  buscarClientes(){
    console.log(this.busquedaForm.value)
    this.ResultBusqueda = this.ResultClientes.filter((x:Cliente) => {
      return x.identifier?.includes(this.busquedaForm.controls.identifier.value!) && x.businessName?.toLowerCase().includes(this.busquedaForm.controls.businessName.value!.toLowerCase()) 
      && x.homeAdress?.toLowerCase().includes(this.busquedaForm.controls.homeAdress.value!.toLowerCase()) && x.email?.toLowerCase().includes(this.busquedaForm.controls.email.value!.toLowerCase());
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
          next: () => {
            swal.fire("Éxito!", "Cliente Registrado Correctamente!", "success");
            this.cliente={} as Cliente;
            this.nuevoClienteForm.reset();
            this.cargarClientes();
          },
          error: () => {
            swal.fire("Error!", "Error al registrar al Cliente!", "error");
          },
        })
        )
    }
    
    this.closeNuevoCliente();
  }
  cargarClientes() {
    this.sub.add(this.clientService.getClientes().subscribe({
            next: (resp) => {
              console.log(resp);
              this.ResultClientes = resp;
              this.buscarClientes();
            },
            error: (err) => {
              console.log(err);
            }
          })
    );
  }
  
}
