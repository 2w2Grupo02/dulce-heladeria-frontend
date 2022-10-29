import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { RoleGuard } from './auth/role.guard';

const routes: Routes=[
  
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )
  },
  {
    path: 'administrador',
    loadChildren: () => import('./administradores/admin.module').then( m => m.AdminModule ),
    canActivate: [AuthGuard, RoleGuard],
    data:{
      ExpectedRole:['Administrador']
    }
  
  },
  {
    path: 'vendedor',
    loadChildren: () => import('./vendedores/vendedor.module').then( m => m.VendedorModule ),
    canActivate: [AuthGuard, RoleGuard],
    data:{
      ExpectedRole:['Vendedor']
    }
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
