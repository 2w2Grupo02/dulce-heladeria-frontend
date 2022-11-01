import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VentasComponent } from './components/ventas/ventas.component';
import { NuevaVentaService } from './services/nueva-venta.service';
import { ClientesComponent } from './components/clientes/clientes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientesService } from './services/clientes.service';
import { VendedorRoutingModule } from './vendedor-routing.module';
import { ListadoClientesComponent } from './pages/listado-clientes/listado-clientes.component';
import { ReporteVentaComponent } from '../administradores/components/reporte-venta/reporte-venta.component';
import { FacturaComponent } from './components/factura/factura.component';



@NgModule({
  declarations: [
    VentasComponent,
    ClientesComponent,
    ListadoClientesComponent,
    FacturaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    VendedorRoutingModule
  ],
  exports:[
    VentasComponent,
    ClientesComponent,
    ListadoClientesComponent,
    FacturaComponent

  ],
  providers:[
    NuevaVentaService,
    ReactiveFormsModule,
    ClientesService

  ]
})
export class VendedorModule { }
