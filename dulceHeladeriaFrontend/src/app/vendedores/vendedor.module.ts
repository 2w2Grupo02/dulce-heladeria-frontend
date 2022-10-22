import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesComponent } from './components/clientes/clientes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientesService } from './services/clientes.service';
import { VendedorRoutingModule } from './vendedor-routing.module';



@NgModule({
  declarations: [
    ClientesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    VendedorRoutingModule
  ],
  exports:[
    ClientesComponent
  ],
  providers:[
    ClientesService
  ]
})
export class VendedorModule { }
