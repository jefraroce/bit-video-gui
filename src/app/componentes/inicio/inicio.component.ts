import { Component, OnInit } from '@angular/core';
import { ProyectosService } from 'src/app/servicios/proyectos.service';
const swal = require('sweetalert');

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  proyectos: Array<any>;

  constructor(private proyectosService: ProyectosService) { }

  ngOnInit(): void {
    this.cargarProyectos();
  }

  cargarProyectos() {
    this.proyectosService.traerProyectos()
      .subscribe((proyectosCargados: Array<any>) => {
        this.proyectos = proyectosCargados;
        console.log(this.proyectos)
      },
      (error) => {
        swal('Error', error, 'error');
        console.error('Error cargando los proyectos: ', error);
      })
  }

}
