import { Component, OnInit } from '@angular/core';
import { ProyectosService } from '../../../servicios/proyectos.service';
import { UsuariosService } from '../../../servicios/usuarios.service';
import { Router } from '@angular/router';
const swal = require('sweetalert');

@Component({
  selector: 'app-crear-proyecto',
  templateUrl: './crear-proyecto.component.html',
  styleUrls: ['./crear-proyecto.component.scss'],
})
export class CrearProyectoComponent implements OnInit {
  constructor(
    private proyectosService: ProyectosService,
    private usuariosService: UsuariosService,
    private router: Router
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
      (resultado: any) => {
        swal('Felicidades', 'El proyecto se creo con exito', 'success');
        setTimeout(() => {
          this.router.navigate(['/proyectos', resultado._id]);
        }, 3000);
      },
      (error) => {
        console.error('Error creando proyecto ', error);
        swal('Error', 'Hubo un problema al crear el proyecto', 'error')
      }
    );
  }
}
