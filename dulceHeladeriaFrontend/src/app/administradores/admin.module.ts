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

@NgModule({
  declarations: [
    RegistrarArticuloComponent,
    ReportesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule
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
