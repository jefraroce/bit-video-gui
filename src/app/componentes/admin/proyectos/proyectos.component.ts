import { Component, OnInit } from '@angular/core';
import { ProyectosService } from '../../../servicios/proyectos.service';
import { UsuariosService } from '../../../servicios/usuarios.service';
import { ButtonRenderComponent } from './button.render.component';
import { ButtonEditComponent } from './button.edit.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {

  tableSettings = {
    columns: {
      nombreProyecto: {
        title: 'Nombre'
      },
      descripcionProyecto: {
        title: 'Descripcion'
      },
      portada: {
        title: 'Portada',
        type: 'html',
        valuePrepareFunction: (value) => {
          return `<img src="${value}" class="img-thumbnail" />`;
        }
      },
      _id: {
        title: 'Detalles',
        type: 'custom',
        renderComponent: ButtonRenderComponent,
        defaultValue: '',
        editor: {
          type: 'custom',
          component: ButtonEditComponent,
        },
      }
    },

    actions: {
      add: false
    },
    delete: {
      confirmDelete: true
    },
    edit: {
      confirmSave: true
    }
  };

  constructor(private proyectosService: ProyectosService, private usuariosService: UsuariosService,private router: Router) { }

  ngOnInit(): void {
    this.cargarProyectos();
  }

  proyectos: [];

  cargarProyectos() {
    this.proyectosService.traerProyectos( { "usuarioId": this.usuariosService.informacionUsuario().id }  )
      .subscribe((proyectos: []) => {
        this.proyectos = proyectos;
      });
  }

  editarProyecto(event) {
    var proyectoEditado = {
	  "usuarioId": this.usuariosService.informacionUsuario().id,
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

  mostrarCrearProyecto() {
    this.router.navigate(['/admin/proyectos/crear']);
  }

}
