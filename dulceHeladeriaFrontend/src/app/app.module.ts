import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './administradores/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';  
import { VentasComponent } from './vendedores/components/ventas/ventas.component';
import { VendedorModule } from './vendedores/vendedor.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VendedorModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
