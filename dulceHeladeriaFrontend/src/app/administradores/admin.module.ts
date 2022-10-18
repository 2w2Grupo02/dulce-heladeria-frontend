import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrarArticuloComponent } from './components/registrar-articulo/registrar-articulo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArticulosService } from './services/articulos.service';



@NgModule({
  declarations: [
    RegistrarArticuloComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    RegistrarArticuloComponent
  ],
  providers: [
    ArticulosService
  ]
})
export class AdminModule { }
