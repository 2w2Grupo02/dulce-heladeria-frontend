import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarArticuloComponent } from './administradores/components/consultar-articulo/consultar-articulo.component';
import { ConsultarUbicacionesArticuloComponent } from './administradores/components/consultar-ubicaciones-articulo/consultar-ubicaciones-articulo.component';
import { RegistrarUsuarioComponent } from './administradores/components/registrar-usuario/registrar-usuario.component';
import { ClientesComponent } from './vendedores/components/clientes/clientes.component';

const routes: Routes = [
  {path: 'articulos', component: ConsultarArticuloComponent},
  {path: 'articulos/:id/ubicaciones', component: ConsultarUbicacionesArticuloComponent},
  {path: 'clientes', component: ClientesComponent},
  {path: 'usuarios', component: RegistrarUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
