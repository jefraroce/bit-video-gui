import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProyectoService } from '../../servicios/proyecto.service';
import { PlanesService } from '../../servicios/planes.service';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
} 


@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.scss']
})
export class ProyectoComponent implements OnInit {
  proyecto: any;
  planes: any;
  linkVideo: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private proyectoService: ProyectoService,
    private planesService: PlanesService
  ) {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.cargarInformacion(params.id);
      this.cargarPlanes(params.id);
    });
  }

  ngOnInit(): void {
  }

  cargarInformacion(idProyecto: String) {
    this.proyectoService.traerProyectoPorId(idProyecto)
      .subscribe((proyecto) => {
        this.proyecto = proyecto;
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