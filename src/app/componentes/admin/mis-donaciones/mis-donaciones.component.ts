import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../../servicios/usuarios.service';
import { ProyectosService } from '../../../servicios/proyectos.service';
import { DonacionesService } from '../../../servicios/donaciones.service';
import { PlanesService } from '../../../servicios/planes.service';


@Component({
  selector: 'app-mis-donaciones',
  templateUrl: './mis-donaciones.component.html',
  styleUrls: ['./mis-donaciones.component.scss']
})
export class MisDonacionesComponent implements OnInit {
  usuario: any;
  proyectos:any;
  donaciones:any;
  planes:any;
  constructor(
    private proyectosService: ProyectosService, 
    private usuariosService: UsuariosService,
    private donacionesService: DonacionesService,
    private planesService: PlanesService,
) { 
  this.usuariosService.autenticacion$.subscribe((usuarioAutenticado) => {
    this.usuario = usuarioAutenticado;
  });
}

  ngOnInit(): void {
    this.cargarProyectos()
  }
  cargarProyectos() {
    this.proyectosService.traerProyectos( { usuarioId: this.usuario.id }  )
      .subscribe((proyectos: any) => {
        this.proyectos = proyectos;
        console.log()
        this.proyectos.forEach( (proyecto) => {
          this.cargarDonaciones(proyecto)
        });
          
      });
  }
  cargarDonaciones(proyecto: any) {
    proyecto.totalDonaciones = 0;
    this.donacionesService.traerDonaciones( { proyectoId: proyecto._id }  )
      .subscribe((donaciones: []) => {
        proyecto.donaciones = donaciones;
        proyecto.totalDonaciones = proyecto.donaciones.reduce( (total,donacion) => total + parseFloat(donacion.valor),0 ) 
        donaciones.forEach( (donacionReal: any) => {
          this.cargarPlan(donacionReal.planId)
        });
      });
  }
  cargarPlan(id:string){
    this.planesService.traerPlanPorId(id)
      .subscribe((plan: any) => {
        this.planes = plan;
      })
  }

}
