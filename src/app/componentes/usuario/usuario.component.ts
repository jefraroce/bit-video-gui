import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UsuariosService } from '../../servicios/usuarios.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  usuario: {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private usuariosService: UsuariosService
  ) {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.cargarInformacion(params.id);
    });
  }

  ngOnInit(): void {
  }

  cargarInformacion(idUsuario) {
    this.usuariosService.traerUsuarioPorId(idUsuario)
      .subscribe((usuario) => {
        this.usuario = usuario;
      },
      (error) => {
        console.error('Error ', error);
      });
  }

}
