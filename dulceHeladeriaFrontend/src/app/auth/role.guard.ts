import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isAuthorized(route);
  }
  
  isAuthorized(route: ActivatedRouteSnapshot): boolean{
    const roles = ['Administrador','Vendedor'];
    const ExpectedRole = route.data['ExpectedRole'];
    const roleMatch = roles.findIndex(role => ExpectedRole.indexOf(role) !== -1);
    return roleMatch < 0 ? false : true;
  }
}
