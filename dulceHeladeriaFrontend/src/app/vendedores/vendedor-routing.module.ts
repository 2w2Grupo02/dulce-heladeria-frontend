import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidaComponent } from '../shared/components/bienvenida/bienvenida.component';
import { FacturaComponent } from './components/factura/factura.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { ListadoClientesComponent } from './pages/listado-clientes/listado-clientes.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', component:BienvenidaComponent},
      {path: 'venta', component:VentasComponent},
      {path: 'clientes', component:ListadoClientesComponent},
      {path: 'factura', component:FacturaComponent},
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
export class VendedorRoutingModule { }