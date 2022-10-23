import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrarArticuloComponent } from './components/registrar-articulo/registrar-articulo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArticulosService } from './services/articulos.service';
import { ConsultarArticuloComponent } from './components/consultar-articulo/consultar-articulo.component';



@NgModule({
  declarations: [
    RegistrarArticuloComponent,
    ConsultarArticuloComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    RegistrarArticuloComponent,
    ConsultarArticuloComponent
  ],
  providers: [
    ArticulosService
  ]
})
export class AdminModule { }
