import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DonacionesService } from '../../servicios/donaciones.service';
import { PlanesService } from '../../servicios/planes.service';
import { ProyectoService } from '../../servicios/proyecto.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from '../../servicios/usuarios.service';

@Component({
  selector: 'app-donar',
  templateUrl: './donar.component.html',
  styleUrls: ['./donar.component.scss']
})
export class DonarComponent implements OnInit {
  usuario;
  proyecto: any = {
    nombreProyecto: null,
    descripcionProyecto: null,
    portada: null,
    enlace: null,
  };
  planes: any;
  donacion: any;
  formularioRegistroDonacion: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private proyectoService: ProyectoService,
    private donacionesService: DonacionesService,
    private planesService: PlanesService,
    private formBuilder: FormBuilder,
    private router: Router,
    private usuariosService: UsuariosService

  ) {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.cargarInformacion(params.id);
      this.cargarPlanes(params.id);
    });
    this.formularioRegistroDonacion = this.formBuilder.group({
      proyectoId: ['', Validators.required],
      planId: ['', Validators.required],
      nombreDonante: ['', Validators.required],
      correoDonante: ['', Validators.required],
      telefonoDonante: ['', Validators.required],
    });

    this.usuariosService.autenticacion$.subscribe((usuarioAutenticado) => {
      this.usuario = usuarioAutenticado;
      if (this.usuario) {
        this.formularioRegistroDonacion.controls['nombreDonante'].setValue(this.usuario.nombre);
      }
    })
  }

  ngOnInit(): void { }

  cargarInformacion(idProyecto: String) {
    this.proyectoService.traerProyectoPorId(idProyecto)
      .subscribe((proyecto) => {
        this.proyecto = proyecto;
        this.formularioRegistroDonacion.controls['proyectoId'].setValue(this.proyecto._id)
      },
        (error) => {
          console.error('Error consultado proyecto: ', error);
        });
  }
  cargarPlanes(idProyecto: String) {
    this.planesService.traerPlanes({ proyectoId: idProyecto })
      .subscribe((planes: []) => {
        this.planes = planes;
      },
        (error) => {
          console.error('Error consultado planes: ', error);
        });
  }
  crearDonacion(donacion) {
    console.log(donacion)
    if (this.formularioRegistroDonacion.valid) {
      this.donacionesService.crearDonacion(donacion).subscribe(
        (donacion1:any) => {
          this.donacion = donacion1;
          alert('Donacion creada con exito');
          this.router.navigate(['/gracias-x-donar/',donacion1._id]);

        },
        (respuesta) => {
          // console.log(error);

          alert(respuesta.error.mensaje);
        }
      );
    } else {
      alert('Por favor revisa que todos los campos este completos')
    }
  }
}
