import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VentasComponent } from './components/ventas/ventas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NuevaVentaService } from './services/nueva-venta.service';


@NgModule({
  declarations: [
    VentasComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    VentasComponent
  ],
  providers:[
    NuevaVentaService
  ]
})
export class VendedorModule { }
