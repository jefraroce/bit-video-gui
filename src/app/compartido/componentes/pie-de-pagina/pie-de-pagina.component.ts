import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../../servicios/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pie-de-pagina',
  templateUrl: './pie-de-pagina.component.html',
  styleUrls: ['./pie-de-pagina.component.scss']
})
export class PieDePaginaComponent implements OnInit {
  usuario;

  constructor(
    private usuariosService: UsuariosService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.usuariosService.consultarLocalStorage();
  }

  cerrarSesion() {
    this.usuariosService.borrarLocalStorage();
    this.router.navigate(['/inicio-de-sesion']);
  }

  volverArriba() {
    window.scroll(0,0);
  }
}
