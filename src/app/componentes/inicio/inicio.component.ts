import { Component, OnInit } from '@angular/core';
import { ProyectosService } from 'src/app/servicios/proyectos.service';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
const swal = require('sweetalert');

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  usuario = null;
  proyectos: Array<any>;
  estaCargando = false;

  constructor(
    private proyectosService: ProyectosService,
    private usuariosService: UsuariosService
    ) {
    this.usuariosService.autenticacion$.subscribe((usuarioAutenticado) => {
      this.usuario = usuarioAutenticado;
    });
  }

  ngOnInit(): void {
    this.cargarProyectos();
  }

  cargarProyectos() {
    this.estaCargando = true;
    this.proyectosService.traerProyectos()
      .subscribe((proyectosCargados: Array<any>) => {
        this.proyectos = proyectosCargados;
        this.estaCargando = false;
      },
      (error) => {
        console.error('Error cargando los proyectos: ', error);
        swal('Error', error, 'error');
        this.estaCargando = false;
      })
  }

}
