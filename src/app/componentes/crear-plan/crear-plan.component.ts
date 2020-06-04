import { Component, OnInit } from '@angular/core';
import { PlanesService } from '../../servicios/planes.service';

@Component({
  selector: 'app-crear-plan',
  templateUrl: './crear-plan.component.html',
  styleUrls: ['./crear-plan.component.scss']
})
export class CrearPlanComponent implements OnInit {

  constructor(private planesService: PlanesService) { }

  ngOnInit(): void {
  }
  
    
  onClickSubmit(data) {
	  
	  var planNuevo = {
      "proyectoId": data.proyectoId,
      "descripcionPlan": data.descripcionPlan,
      "nombrePlan": data.nombrePlan,
      "valor": data.valor,
    };
    this.planesService.crearPlan(planNuevo)
      .subscribe((resultado) => {

      },
        (error) => {
          console.error('Error creando plan ', error);
        });
   }

}
