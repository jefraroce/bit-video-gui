import { Component, OnInit } from '@angular/core';
import { PlanesService } from '../../../servicios/planes.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
const swal = require('sweetalert');

@Component({
  selector: 'app-crear-plan',
  templateUrl: './crear-plan.component.html',
  styleUrls: ['./crear-plan.component.scss'],
})
export class CrearPlanComponent implements OnInit {
  constructor(
    private planesService: PlanesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
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
        (resultado: any) => {
          swal('Felicidades', 'El proyecto se creo con exito', 'success');
          if (resultado._id) {
            setTimeout(() => {
              this.router.navigate(['/proyectos', resultado._id]);
            }, 3000);
          }
        },
        (error) => {
          console.error('Error creando plan ', error);
          swal('Error', 'Hubo un problema al crear el proyecto', 'error')
        }
      );
    });
  }
}
