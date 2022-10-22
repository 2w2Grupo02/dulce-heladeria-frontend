import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrarArticuloComponent } from './components/registrar-articulo/registrar-articulo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArticulosService } from './services/articulos.service';
import { ReportesComponent } from './components/reportes/reportes.component';



@NgModule({
  declarations: [
    RegistrarArticuloComponent,
    ReportesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    RegistrarArticuloComponent,
    ReportesComponent
  ],
  providers: [
    ArticulosService
  ]
})
export class AdminModule { }
