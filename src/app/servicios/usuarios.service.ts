import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private opciones = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      // 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjVlY2YyMzU3ZmVhODY1NDI1ZDUyNzIyNiIsIm5vbWJyZSI6IlNhbXkiLCJmZWNoYURlRXhwaXJhY2lvbiI6MTU5MTE0NDA3OH0.C4m_4DoxHgZeJktzPQhtpjDaXG5XG9U3n6Cp6vG9GL4'
    })
  }

  constructor(private http: HttpClient) { }

  traerUsuarios(parametros = {}) {
    return this.http.get(`${environment.API_URL}/usuarios`, Object.assign({}, this.opciones, { params: parametros }));
  }

  registrarUsuario(datos) {
    return this.http.post(`${environment.API_URL}/usuarios`, datos);
  }

  iniciarSesion(credenciales) {
    this.http.post(`${environment.API_URL}/usuarios/inicio_de_sesion`, credenciales)
      .subscribe((token) => {
        this.guardarToken(token)
      }, (error) => {
        console.error('Error ', error);
      })
  }

  guardarToken(token) {
    localStorage.setItem('usuario', token);
    this.opciones.headers.append('Authorization', `Bearer ${token}`);
  }
}
