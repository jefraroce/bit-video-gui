import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../servicios/usuarios.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})
export class ListaUsuariosComponent implements OnInit {
  usuarios: {};

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.usuariosService.traerUsuarios()
      .subscribe(
        (usuariosDeLaBaseDeDatos) => {
          this.usuarios = usuariosDeLaBaseDeDatos;
        }, (error) => {
          console.error('Error consultando usuarios ', error);
        });
  }

  esValidoMostrar() {
    return this.usuariosService.estaAutenticado()
  }

}
