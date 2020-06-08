import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../../servicios/usuarios.service';
import { ProyectosService } from '../../../servicios/proyectos.service';
import { DonacionesService } from '../../../servicios/donaciones.service';


@Component({
  selector: 'app-mis-donaciones',
  templateUrl: './mis-donaciones.component.html',
  styleUrls: ['./mis-donaciones.component.scss']
})
export class MisDonacionesComponent implements OnInit {
  usuario: any;
  proyectos:any;
  donaciones:any;
  constructor(
    private proyectosService: ProyectosService, 
    private usuariosService: UsuariosService,
    private donacionesService: DonacionesService,
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
        console.log(this.proyectos[1]._id)
        this.cargarDonaciones(this.proyectos[1]._id)
      });
  }
  cargarDonaciones(idProyecto: String) {
    this.donacionesService.traerDonaciones( { proyectoId: idProyecto }  )
      .subscribe((donaciones: []) => {
        this.donaciones = donaciones;
        console.log(donaciones)
      });
  }

}
