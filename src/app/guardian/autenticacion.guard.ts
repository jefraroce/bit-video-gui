import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UsuariosService } from '../servicios/usuarios.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AutenticacionGuard implements CanActivate {
  constructor(
    private usuariosService: UsuariosService,
    private router: Router
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const estaAutenticado =
      this.usuariosService.consultarLocalStorage() !== null;
    if (!estaAutenticado) {
      this.router.navigate(['/inicio-de-sesion']);
    }
    return estaAutenticado;
  }
}
