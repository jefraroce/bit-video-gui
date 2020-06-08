import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  private autenticacion = new BehaviorSubject<{}>({});
  autenticacion$ = this.autenticacion.asObservable();

  constructor(private http: HttpClient) {
    this.autenticacion.next(this.informacionUsuario());
  }

  registrarUsuario(formData) {
    return this.http.post(`${environment.API_URL}/usuario`, formData);
  }
  iniciarSesion(datos) {
    return this.http.post(`${environment.API_URL}/usuario/login`, datos);
  }

  guardarLocalStorage(usuario) {
    localStorage.setItem('usuario', JSON.stringify(usuario));
    this.autenticacion.next(this.informacionUsuario());
  }

  borrarLocalStorage() {
    localStorage.removeItem('usuario');
    this.autenticacion.next(null);
  }

  consultarLocalStorage() {
    return JSON.parse(localStorage.getItem('usuario'));
  }

  b64DecodeUnicode(str) {
    // Going backwards: from bytestream, to percent-encoding, to original string.
    return decodeURIComponent(atob(str).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  }

  informacionUsuario() {
    const token = this.consultarLocalStorage();
    if (!token) {
      return null;
    }

    var base64Url = token.jwt.split('.')[1];
    var base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(this.b64DecodeUnicode(base64));
  }
}
