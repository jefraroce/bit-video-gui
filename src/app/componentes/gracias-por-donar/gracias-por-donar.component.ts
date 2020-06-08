import { Component, OnInit } from '@angular/core';
import { DonacionesService } from '../../servicios/donaciones.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ProyectoService } from '../../servicios/proyecto.service';
import { PlanesService } from '../../servicios/planes.service';



@Component({
  selector: 'app-gracias-por-donar',
  templateUrl: './gracias-por-donar.component.html',
  styleUrls: ['./gracias-por-donar.component.scss']
})
export class GraciasPorDonarComponent implements OnInit {
  donacion : any;
  proyecto: any;
  plan: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private donacionesService: DonacionesService,
    private proyectoService: ProyectoService,
    private planesService: PlanesService
  ) { 
    this.activatedRoute.params.subscribe((params: Params) => {
      this.cargarDonacion(params.id);
      console.log(this.donacion)
      
    });
    

  }

  ngOnInit(): void {
  }
  cargarDonacion(idDonacion: String) {
    this.donacionesService.traerDonacionPorId(idDonacion)
      .subscribe((donacion: any) => {
        this.donacion = donacion;
        this.cargarProyecto(this.donacion);
      },
      (error) => {
        console.error('Error consultado donacion: ', error);
      });
  }
  cargarProyecto(donacion1) {
    this.proyectoService.traerProyectoPorId(donacion1.proyectoId)
      .subscribe((proyecto: any) => {
        this.proyecto = proyecto;
        this.cargarPlanes(this.donacion.planId);
      },
      (error) => {
        console.error('Error consultado proyecto: ', error);
      }); 
  }
  cargarPlanes(idPlan: String) {
    this.planesService.traerPlanPorId(idPlan)
      .subscribe((plan: []) => {
        this.plan = plan;
        console.log(plan)
      },
      (error) => {
        console.error('Error consultado planes: ', error);
      }); 
  }
}
