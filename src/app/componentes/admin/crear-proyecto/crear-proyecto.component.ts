import { Component, OnInit } from '@angular/core';
import { ProyectosService } from '../../../servicios/proyectos.service';
import { UsuariosService } from '../../../servicios/usuarios.service';
const swal = require('sweetalert');

@Component({
  selector: 'app-crear-proyecto',
  templateUrl: './crear-proyecto.component.html',
  styleUrls: ['./crear-proyecto.component.scss'],
})
export class CrearProyectoComponent implements OnInit {
  constructor(
    private proyectosService: ProyectosService,
    private usuariosService: UsuariosService
  ) {}

  ngOnInit(): void {}

  onClickSubmit(data) {
    var proyectoNuevo = {
      usuarioId: this.usuariosService.informacionUsuario().id,
      nombreProyecto: data.nombreProyecto,
      descripcionProyecto: data.descripcionProyecto,
      portada: data.portada,
      enlace: data.enlace,
    };
    this.proyectosService.crearProyecto(proyectoNuevo).subscribe(
      (resultado) => {
        swal('success', 'El proyecto se creo con exito');
      },
      (error) => {
        console.error('Error creando proyecto ', error);
      }
    );
  }
}
