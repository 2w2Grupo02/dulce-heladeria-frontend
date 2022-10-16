import { Component, OnInit } from '@angular/core';


declare var window:any;

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  formNuevo:any;
  formElegir:any;

  constructor() { }

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

}
