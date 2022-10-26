import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultarArticuloComponent } from './components/consultar-articulo/consultar-articulo.component';
import { ConsultarUbicacionesArticuloComponent } from './components/consultar-ubicaciones-articulo/consultar-ubicaciones-articulo.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { ReportesComponent } from './components/reportes/reportes.component';

const routes: Routes = [
  {
    path: '',
    children: [

      {path: 'alta-usuario', component:RegistrarUsuarioComponent},
      {path: 'reportes', component:ReportesComponent},
      {path: 'articulos', component:ConsultarArticuloComponent},
      {path: 'articulos/:id/ubicaciones', component:ConsultarUbicacionesArticuloComponent},

      {path:'**', redirectTo:''}

    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AdminRoutingModule { }