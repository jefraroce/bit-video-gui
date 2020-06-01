import { Component, OnInit } from '@angular/core';
import { ProyectosService } from '../../servicios/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {
	
	tableSettings = {
    columns: {
      proyectoId: {
        title: 'proyectoId'
      },
      nombreProyecto: {
        title: 'nombreProyecto'
      },
      descripcionProyecto: {
        title: 'descripcionProyecto'
      },
      portada: {
        title: 'portada',
		type: 'html',
		valuePrepareFunction: (value) => { 
		return `<img src="`+value+`" style="width:50px height:50px" />`
		}
      },
      enlace: {
        title: 'enlace',
		type: 'html',
		valuePrepareFunction: (value) => { 
		return `<iframe width="420" height="345" src="`+value+`"></iframe>`
		}
      }
    },
	
	actions : {
		add: false
	},
    delete: {
      confirmDelete: true
    },
    edit: {
      confirmSave: true
    }
  };

  constructor(private proyectosService: ProyectosService) { }

  ngOnInit(): void {
	   this.cargarProyectos();
  }
  
  proyectos: [];
  
  cargarProyectos() {
    this.proyectosService.traerProyectos()
      .subscribe((proyectos: []) => {
        this.proyectos = proyectos;
      });
  }
   
   editarProyecto(event) {
    var proyectoEditado = {
      "proyectoId": event.newData.proyectoId,
      "nombreProyecto": event.newData.nombreProyecto,
      "descripcionProyecto": event.newData.descripcionProyecto,
      "portada": event.newData.portada,
      "enlace": event.newData.enlace
    };
    this.proyectosService.editarProyecto(event.newData._id, proyectoEditado)
      .subscribe((resultado) => {
        this.cargarProyectos();
      },
        (error) => {
          console.error('Error editando proyecto ', error);
        });
  }

  borrarProyecto(event) {
    this.proyectosService.eliminarProyecto(event.data._id)
      .subscribe((resultado) => {
        this.cargarProyectos();
      },
        (error) => {
          console.error('Error eliminando proyecto ', error);
        });
  }

  

}
