import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Subscription } from 'rxjs';
import { Cliente } from '../../interfaces/cliente-interface';
import { ClientesService } from '../../services/clientes.service';


declare var window:any;

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit , OnDestroy {

  private sub: Subscription = new Subscription();
  formNuevo:any;
  formElegir:any;
  nuevoClienteForm = new FormGroup({
    businessName: new FormControl('', Validators.required),
    identifierTypeId: new FormControl('1', Validators.required),
    identifier: new FormControl('', Validators.required),
    homeAdress: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required])
  });
  constructor(private clienteService:ClientesService) { }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  cliente?: Cliente;
  buscador: string='';
  elegido: number=0;

  ngOnInit(): void {
    this.formNuevo = new window.bootstrap.Modal(
      document.getElementById("NuevoCliente")
    );
    this.formElegir = new window.bootstrap.Modal(
      document.getElementById("ElegirCliente")
    );
  }

  openNuevoCliente(){
    this.formNuevo.show();
  }
  closeNuevoCliente(){
    this.formNuevo.hide();
  }
  openElegirCliente(){
    this.formElegir.show();
  }
  closeElegirCliente(){
    this.formElegir.hide();
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
        this.clienteService.create(this.cliente)
        .subscribe({
          next: (resp : any) => { alert(resp)},
          error : () => {alert("error")}
        }
      ))
    }
    
    this.closeNuevoCliente();
  }
  cargarConsumidorF(){
    this.cliente={businessName:'Consumidor Final'} as Cliente;
    console.log(this.cliente)
  }
  buscarClientes(){
    console.log(this.buscador)
  }
  cargarElegido(){
    console.log(this.elegido)
    this.closeElegirCliente();
  }
}
