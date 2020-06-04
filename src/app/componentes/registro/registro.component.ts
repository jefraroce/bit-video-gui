import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from '../../servicios/usuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {
  avatarFile: string;
  avatarCargado: File;

  usuario;
  formularioRegistro: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private registroService: UsuariosService
  ) {
    this.formularioRegistro = this.formBuilder.group({
      nombreUsuario: ['', Validators.required],
      avatar: ['', Validators.required],
      correoUsuario: ['', Validators.required],
      contrasena: ['', Validators.required],
    });
    this.avatarFile = '../../../assets/images/avatar-default-icon.png';
  }

  ngOnInit(): void {}
  crearUsuario(datos) {
    console.log('crear usuario 1');
    const formData = new FormData();
    formData.append('nombre', datos.nombreUsuario);
    formData.append('correoElectronico', datos.correoUsuario);
    formData.append('contrasena', datos.contrasena);
    formData.append('avatar', this.avatarCargado);
    console.log(formData);
    this.registroService.registrarUsuario(formData).subscribe(
      (usuario) => {
        alert('usuario creado con exito');
      },
      (msg) => {
        alert('Falla en creacion de usuario');
      }
    );

    console.log('crear usuario');
  }
  onFileSelected(event) {
    if (event.target.files && event.target.files[0]) {
      this.avatarCargado = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.avatarFile = e.target.result;
      };
      reader.readAsDataURL(this.avatarCargado);
      console.log(event);
    }
  }
}
