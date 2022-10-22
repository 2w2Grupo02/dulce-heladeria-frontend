import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './components/clientes/clientes.component';

const routes: Routes = [
  {
    path: '',
    children: [

      {path: 'clientes', component:ClientesComponent},
      {path:'**', redirectTo:'clientes'}

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