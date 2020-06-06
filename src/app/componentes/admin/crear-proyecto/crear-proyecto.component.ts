import { Component, OnInit } from '@angular/core';
import { ProyectosService } from '../../../servicios/proyectos.service';

@Component({
  selector: 'app-crear-proyecto',
  templateUrl: './crear-proyecto.component.html',
  styleUrls: ['./crear-proyecto.component.scss']
})
export class CrearProyectoComponent implements OnInit {

  constructor(private proyectosService: ProyectosService) { }

  ngOnInit(): void {
  }

  
  onClickSubmit(data) {
	  
	  var proyectoNuevo = {
      "proyectoId": data.proyectoId,
      "nombreProyecto": data.nombreProyecto,
      "descripcionProyecto": data.descripcionProyecto,
      "portada": data.portada,
      "enlace": data.enlace
    };
    this.proyectosService.crearProyecto(proyectoNuevo)
      .subscribe((resultado) => {
        
      },
        (error) => {
          console.error('Error creando proyecto ', error);
        });
   }
}
