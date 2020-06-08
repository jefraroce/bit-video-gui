import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from '../../servicios/usuarios.service';
import { Router } from '@angular/router';
const swal = require('sweetalert');

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
    private registroService: UsuariosService,
    private router: Router
  ) {
    this.formularioRegistro = this.formBuilder.group({
      nombreUsuario: ['', Validators.required],
      avatar: ['', Validators.required],
      correoUsuario: [
        '', [
          Validators.required,
          Validators.email
        ]
      ],
      contrasena: [
        '',
        [
          Validators.required,
          Validators.minLength(6)
        ]
      ],
    });
    this.avatarFile = '../../../assets/images/avatar-default-icon.png';
  }

  ngOnInit(): void {}

  crearUsuario(datos) {
    if (this.formularioRegistro.valid) {
      const formData = new FormData();
      formData.append('nombre', datos.nombreUsuario);
      formData.append('correoElectronico', datos.correoUsuario);
      formData.append('contrasena', datos.contrasena);
      formData.append('avatar', this.avatarCargado);
      this.registroService.registrarUsuario(formData).subscribe(
        (usuario) => {
          swal('Genial', 'Muchas gracias por registrarte', 'success');
          setTimeout(() => {
            this.router.navigate(['/usuario/inicio-de-sesion']);
          }, 3000);
        },
        (error) => {
          if (error.error.errors.correoElectronico && error.error.errors.correoElectronico.kind === 'unique') {
            swal('Error', 'Yá existe un usuario registrado con este correo electrónico.', 'error');
          } else {
            swal('Error', 'Ocurrio un error al intentar crear el usuario.', 'error');
          }
        }
      );
    } else if (this.formularioRegistro.controls['nombreUsuario'].hasError('required')) {
      swal('Advertencia', 'Debe ingresar su nombre.', 'warning');
    } else if (this.formularioRegistro.controls['correoUsuario'].hasError('required')) {
      swal('Advertencia', 'Debe ingresar su correo electrónico.', 'warning');
    } else if (this.formularioRegistro.controls['contrasena'].value.length < 6) {
      swal('Advertencia', 'La contraseña debe tener al menos 6 carácteres.', 'warning');
    } else {
      swal('Advertencia', 'Por favor revisa que todos tus datos esten bien. Todos los campos son obligatorios.', 'warning');
    }
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
