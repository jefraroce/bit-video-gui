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
  planes: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private donacionesService: DonacionesService,
    private proyectoService: ProyectoService,
    private planesService: PlanesService
  ) { 
    this.activatedRoute.params.subscribe((params: Params) => {
      this.cargarDonacion(params.id);
      this.cargarDonacion(this.donacion);
      
    });
    

  }

  ngOnInit(): void {
  }
  cargarDonacion(idDonacion: String) {
    this.donacionesService.traerDonacionPorId(idDonacion)
      .subscribe((donacion) => {
        this.donacion = donacion;
      },
      (error) => {
        console.error('Error consultado donacion: ', error);
      });
  }
  cargarProyecto(donacion1) {
    this.proyectoService.traerProyectoPorId({_id: donacion1.proyectoId})
      .subscribe((proyecto: []) => {
        this.proyecto = proyecto;
        console.log(proyecto)
      },
      (error) => {
        console.error('Error consultado proyecto: ', error);
      }); 
  }
  cargarPlanes(idProyecto: String) {
    this.planesService.traerPlanes({proyectoId: idProyecto})
      .subscribe((planes: []) => {
        this.planes = planes;
        console.log(planes)
      },
      (error) => {
        console.error('Error consultado planes: ', error);
      }); 
  }
}
