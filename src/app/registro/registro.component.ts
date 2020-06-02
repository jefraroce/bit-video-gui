import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from '../servicios/usuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  registroForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usuariosService: UsuariosService
  ) {
    this.registroForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      correoElectronico: ['', Validators.required],
      contrasena: ['', Validators.required],
      avatar: [null, Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(data) {
    const form: HTMLFormElement = document.getElementById('formulario-registro') as HTMLFormElement;
    console.log('Form ', data);
    this.usuariosService.registrarUsuario( new FormData( form ) )
      .subscribe((response) => {
        console.log(response)
      },
      (error) => {
        console.error('Error: ', error)
      })
  }

}
