import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UsuariosService } from '../../servicios/usuarios.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  usuario: any;
  linkVideo: string;
  proyecto = {
    _id: null,
    enlace: 'https://www.youtube.com/embed/ka1poUZdz7U'
  }

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

  cargarInformacion(idUsuario: String) {
    this.usuariosService.traerUsuarioPorId(idUsuario)
      .subscribe((usuario) => {
        this.usuario = usuario;
        this.proyecto.enlace = 'https://www.youtube.com/embed/ka1poUZdz7U';

        // this.linkVideo = 'https://www.youtube.com/embed/ka1poUZdz7U'
        // document.querySelector('#video').innerHTML = `<iframe width="560" height="315" src="${this.linkVideo}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      },
      (error) => {
        console.error('Error consultado usuario: ', error);
      });
  }

}
