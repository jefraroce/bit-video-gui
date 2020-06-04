import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from '../../servicios/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-de-sesion',
  templateUrl: './inicio-de-sesion.component.html',
  styleUrls: ['./inicio-de-sesion.component.scss'],
})
export class InicioDeSesionComponent implements OnInit {
  usuario;
  formularioInicioDeSesion: FormGroup;

  constructor(
    private usuariosService: UsuariosService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.formularioInicioDeSesion = this.formBuilder.group({
      correoElectronico: ['', Validators.required],
      contrasena: ['', Validators.required],
    });
  }

  ngOnInit(): void {}
  iniciarSesion(datos) {
    this.usuariosService.iniciarSesion(datos).subscribe(
      (usuario) => {
        this.usuario = usuario;
        console.log(usuario);
        this.usuariosService.guardarLocalStorage(usuario);
        //this.router.navigate(['/reproductor']);
      },
      (respuesta) => {
        alert('no se encontro el usuario');
      }
    );
  }
}
