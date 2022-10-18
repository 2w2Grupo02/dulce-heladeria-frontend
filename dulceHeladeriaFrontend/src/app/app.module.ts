import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VendedorModule } from './vendedores/vendedor.module';
import { RegistrarUsuarioComponent } from './administradores/components/registrar-usuario/registrar-usuario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminModule } from './administradores/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VendedorModule,
    HttpClientModule,
    ReactiveFormsModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
