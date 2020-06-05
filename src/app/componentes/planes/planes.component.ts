import { Component, OnInit } from '@angular/core';
import { PlanesService } from '../../servicios/planes.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.scss']
})
export class PlanesComponent implements OnInit {
  planes: [];
  tableSettings = {
    columns: {
      proyectoId: {
        title: 'proyectoId'
      },
      descripcionPlan: {
        title: 'descripcionPlan'
      },
      nombrePlan: {
        title: 'nombrePlan'
      },
      valor: {
        title: 'valor'
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

  constructor(private activatedRoute: ActivatedRoute, private planesService: PlanesService) {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.cargarPlanes(params.id);
    });
  }

  ngOnInit(): void { }

  cargarPlanes(proyectoId) {
    this.planesService.traerPlanes({ proyectoId: proyectoId })
      .subscribe((planes: []) => {
        this.planes = planes;
      },
      (error) => {
        console.error('Error cargando planes: ', error);
      });
  }

  editarPlan(event) {
    var planEditado = {
      "proyectoId": event.newData.proyectoId,
      "descripcionPlan": event.newData.descripcionPlan,
      "nombrePlan": event.newData.nombrePlan,
      "valor": event.newData.valor
    };
    this.planesService.editarPlan(event.newData._id, planEditado)
      .subscribe((resultado) => {
        this.cargarPlanes(event.newData.proyectoId);
      },
        (error) => {
          console.error('Error editando plan ', error);
        });
  }

  borrarPlan(event) {
    this.planesService.eliminarPlan(event.data._id)
      .subscribe((resultado) => {
        this.cargarPlanes(event.data._id);
      },
        (error) => {
          console.error('Error eliminando plan ', error);
        });
  }

}
