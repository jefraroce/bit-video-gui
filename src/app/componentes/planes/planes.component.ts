import { Component, OnInit } from '@angular/core';
import { PlanesService } from '../../servicios/planes.service';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.scss']
})
export class PlanesComponent implements OnInit {

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

  constructor(private planesService: PlanesService) { }

  ngOnInit(): void {
	   this.cargarPlanes();
  }
  
  planes: [];
  
  cargarPlanes() {
    this.planesService.traerPlanes()
      .subscribe((planes: []) => {
        this.planes = planes;
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
        this.cargarPlanes();
      },
        (error) => {
          console.error('Error editando plan ', error);
        });
  }

  borrarPlan(event) {
    this.planesService.eliminarPlan(event.data._id)
      .subscribe((resultado) => {
        this.cargarPlanes();
      },
        (error) => {
          console.error('Error eliminando plan ', error);
        });
  }


}
