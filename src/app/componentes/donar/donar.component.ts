import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DonacionesService } from '../../servicios/donaciones.service';
import { PlanesService } from '../../servicios/planes.service';
import { ProyectoService } from '../../servicios/proyecto.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from '../../servicios/usuarios.service';
const swal = require('sweetalert');

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
  donacion: any = {
    valor: 0
  };
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
      valor: [null, Validators.required]
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
          swal('Exito', 'Donación creada con exito', 'success');
          this.router.navigate(['/gracias-x-donar/',donacion1._id]);

        },
        (respuesta) => {
          // console.log(error);

          alert(respuesta.error.mensaje);
        }
      );
    } else {
      swal('Error', 'Revisa los campos a llenar', 'warning');
    }
  }
  seleccionarPlan(){
    console.log(this.formularioRegistroDonacion.controls["planId"]);
    const planId =  this.formularioRegistroDonacion.controls["planId"].value
    const planesSeleccionados = this.planes.filter((plan) => plan._id === planId)
    console.log("Este es el plan seleccionado", planesSeleccionados);
    if (planesSeleccionados.length > 0){
      this.formularioRegistroDonacion.controls['valor'].setValue(parseFloat(planesSeleccionados[0].valor));
      // this.donacion.valor = parseFloat(planesSeleccionados[0].valor)
    } else {
      this.formularioRegistroDonacion.controls['valor'].setValue("");
    }
  }
}
