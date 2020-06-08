import { Component, OnInit } from '@angular/core';
import { ProyectosService } from 'src/app/servicios/proyectos.service';
const swal = require('sweetalert');

@Component({
  selector: 'app-lista-proyectos',
  templateUrl: './lista-proyectos.component.html',
  styleUrls: ['./lista-proyectos.component.scss']
})
export class ListaProyectosComponent implements OnInit {
  proyectos: Array<any>;
  estaCargando = false;
  busqueda: String;

  constructor(private proyectosService: ProyectosService) { }

  ngOnInit(): void {
    this.cargarProyectos();
  }

  cargarProyectos() {
    this.estaCargando = true;

    const filtros = typeof this.busqueda === 'string' && this.busqueda.length > 0 ? { nombreProyecto: this.busqueda } : {};

    this.proyectosService.traerProyectos(filtros)
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
