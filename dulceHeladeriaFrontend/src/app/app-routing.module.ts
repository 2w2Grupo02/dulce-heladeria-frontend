import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes=[
  
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )
  },
  {
    path: 'administrador',
    loadChildren: () => import('./administradores/admin.module').then( m => m.AdminModule ),
  
  },
  {
    path: 'vendedor',
    loadChildren: () => import('./vendedores/vendedor.module').then( m => m.VendedorModule )
  },
  {
    path: '**', redirectTo:'auth',
  }
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
