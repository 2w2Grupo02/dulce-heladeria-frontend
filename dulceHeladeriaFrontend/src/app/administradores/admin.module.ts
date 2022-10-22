import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrarArticuloComponent } from './components/registrar-articulo/registrar-articulo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArticulosService } from './services/articulos.service';
import { ReportesComponent } from './components/reportes/reportes.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
//import {MatInputModule} from '@angular/material/input';
//import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from "@angular/material/form-field";
import { ReporteVentaComponent } from './components/reporte-venta/reporte-venta.component';
import { NgChartsModule } from 'ng2-charts';
import { ReporteGraficoLineaComponent } from './components/reporte-venta/reporte-grafico-linea/reporte-grafico-linea.component';

@NgModule({
  declarations: [
    RegistrarArticuloComponent,
    ReportesComponent,
    ReporteVentaComponent,
    ReporteGraficoLineaComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    NgChartsModule
  ],
  exports: [
    RegistrarArticuloComponent,
    ReportesComponent,
    MatDatepickerModule
  ],
  providers: [
    ArticulosService
  ]
})
export class AdminModule { }
