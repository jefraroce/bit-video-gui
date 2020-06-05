import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../../servicios/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss']
})
export class CabeceraComponent implements OnInit {
  usuario;

  constructor(
    private usuariosService: UsuariosService,
    private router: Router
    ) {
    // this.usuariosService.autenticacion$.subscribe((usuarioAutenticado) => {
    //   this.usuario = usuarioAutenticado;
    // });
  }

  ngOnInit(): void {
    this.usuariosService.consultarLocalStorage();
  }

  cerrarSesion() {
    this.usuariosService.borrarLocalStorage();
    this.router.navigate(['/inicio-de-sesion']);
  }
}
