import { Component, OnInit } from '@angular/core';
import { PlanesService } from '../../../servicios/planes.service';
import { ActivatedRoute, Params } from '@angular/router';
const swal = require('sweetalert');

@Component({
  selector: 'app-crear-plan',
  templateUrl: './crear-plan.component.html',
  styleUrls: ['./crear-plan.component.scss'],
})
export class CrearPlanComponent implements OnInit {
  constructor(
    private planesService: PlanesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  onClickSubmit(data) {
    this.activatedRoute.params.subscribe((params: Params) => {
      var planNuevo = {
        proyectoId: params.id,
        descripcionPlan: data.descripcionPlan,
        nombrePlan: data.nombrePlan,
        valor: data.valor,
      };

      this.planesService.crearPlan(planNuevo).subscribe(
        (resultado) => {
          swal('success', 'La donacion se creo con exito');
        },
        (error) => {
          console.error('Error creando plan ', error);
        }
      );
    });
  }
}
