import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  private usuarioAutenticado = null;
  private autenticacion = new BehaviorSubject<{}>({});

  constructor(private http: HttpClient) {}
  registrarUsuario(formData) {
    return this.http.post(`${environment.API_URL}/usuario`, formData);
  }
  iniciarSesion(datos) {
    return this.http.post(`${environment.API_URL}/usuario/login`, datos);
  }
  guardarLocalStorage(usuario) {
    this.usuarioAutenticado = usuario;
    localStorage.setItem('usuario', JSON.stringify(usuario));
    this.autenticacion.next(this.usuarioAutenticado);
  }
  borrarLocalStorage() {
    localStorage.removeItem('usuario');
    this.usuarioAutenticado = null;
    this.autenticacion.next(null);
  }
  consultarLocalStorage() {
    this.usuarioAutenticado = JSON.parse(localStorage.getItem('usuario'));
    this.autenticacion.next(this.usuarioAutenticado);
    return this.usuarioAutenticado;
  }
}
