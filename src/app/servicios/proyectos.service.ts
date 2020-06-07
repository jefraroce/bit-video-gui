import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  private PROYECTOS_URL = `${environment.API_URL}/proyecto`;

  constructor(private http: HttpClient) { }

  traerProyectos(parametros = {}) {
    return this.http.get(this.PROYECTOS_URL, { params: parametros });
  }

  eliminarProyecto(id) {
    return this.http.delete(`${this.PROYECTOS_URL}/${id}`);
  }

  editarProyecto(id, proyecto) {
    return this.http.put(`${this.PROYECTOS_URL}/${id}`, proyecto);
  }

  crearProyecto(proyecto) {
    return this.http.post(this.PROYECTOS_URL, proyecto);
  }

  guardarLocalStorage(proyecto) {
    localStorage.setItem('proyecto', JSON.stringify(proyecto));
  }

  borrarLocalStorage() {
    localStorage.setItem('proyecto', ' ');
  }
}
