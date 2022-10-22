import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';

const routes: Routes = [
  {
    path: '',
    children: [

      {path: 'alta-usuario', component:RegistrarUsuarioComponent},
      {path:'**', redirectTo:'alta-usuario'}

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